// Trae herramientas que el service necesita para funcionar
import { Injectable } from "@angular/core"
import { Preferences } from "@capacitor/preferences";
import { Task, TaskStatus } from "../models/task.model";

// Crea una sola instancia para la app
@Injectable({
    providedIn: 'root'
})
export class TaskService {
    // Define una clave con la que se guardarán las tareas en el almacenamiento local
    private readonly STORAGE_KEY = 'tasks';

    // Arreglo que guarda en memoria cuando la app esta activa (Antes de guardarlo en el dispositivo)
    private task: Task[] = [];

    async init(): Promise<void> {
        // Initialization logic here
        const {value} = await Preferences.get({key: this.STORAGE_KEY});
        this.task = value ? JSON.parse(value) : [];
    }

    // Devuleve las tareas que se encuentran en memoria (antes de guardarlas en el dispositivo)
    getTasks(): Task[] {
        return [...this.task];
    }

    // Busca una tarea por su ID
    getTaskById(id: string): Task | undefined {
        return this.task.find(task => task.id === id);
    }

    // Agrega una tarea nueva
    async addTask(taskData: Omit<Task, 'id' | 'fechaCreación' | 'completada'>): 
    Promise<void> {
        const newTask: Task = {
            ...taskData,
            id: crypto.randomUUID(),
            fechaCreación: new Date().toISOString(),
            completada: taskData.estado === 'Completada'
        };
        this.task.push(newTask);
        await this.saveTasks();
    }
    
    // Actualiza una tarea existente
    async updateTask(updateTask: Task): Promise<void> {
        const index = this.task.findIndex(task => task.id === updateTask.id);
        if (index === -1) return;
        this.task[index] = updateTask;
        await this.saveTasks();
    }

    // Elimina una tarea por su ID
    async deleteTask(id: string): Promise<void> {
        this.task = this.task.filter(task => task.id !== id);
        await this.saveTasks();    
    }

    // Cambia el estado de una tarea
    async changeStatus(id: string, estado: TaskStatus): Promise<void> {
        const task = this.task.find(task => task.id === id);
        if (!task) return;
        
        task.estado = estado;
        task.completada = estado === 'Completada';
        await this.saveTasks();
    }

    // Devuelve un resumen de las tareas
    getSummary(){
        const total = this.task.length;
        const pendente = this.task.filter(task => task.estado === 'Pendiente').length;
        const enProgresso = this.task.filter(task => task.estado === 'En progreso').length;
        const concluida = this.task.filter(task => task.estado === 'Completada').length;

        const hoy = new Date();
        const vencidas = this.task.filter(task => 
            task.estado !== 'Completada' && new Date(task.fechaLimite) < hoy ).length;

        return { 
            total, 
            pendente, 
            enProgresso, 
            concluida, 
            vencidas };
    }

    // Additional methods for filtering and sorting tasks can be added here
     async saveTasks(): Promise<void> {
        await Preferences.set({
            key: this.STORAGE_KEY,
            value: JSON.stringify(this.task)
        });
    }
}
