export type TaskStatus = 'Pendiente' | 'En progreso' | 'Completada';
export type TaskPriority = 'alta' | 'media' | 'baja';

export interface Task {
  id: string;
  titulo: string;
  descripcion: string;
  fechaCreación: string;
  fechaLimite: string;   // ✅ no 'dueDate'
  estado: TaskStatus;    // ✅ no 'status'
  prioridad: TaskPriority;
  categoria: string;
  completada: boolean;
}