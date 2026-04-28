import { Component } from '@angular/core'; 
import {FormsModule} from '@angular/forms';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CommonModule } from '@angular/common';
import { TaskService } from '../services/task.services';
import { TaskStatus, TaskPriority} from '../models/task.model';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonLabel,
  IonToast,
  ToastController
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    FormsModule,
    IonItem,
    IonInput,
    IonTextarea,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonLabel,
    IonToast
  ]
})

export class Tab2Page {
  mostrarToast = false;
  mensajeToast = '';

  form: {
    titulo: string;
    descripcion: string;
    fechaLimite: string;
    estado: TaskStatus;
    prioridad: TaskPriority;
    categoria: string;
  }={
     titulo: '',
    descripcion: '',
    fechaLimite: '',
    estado: 'Pendiente',
    prioridad: 'media',
    categoria: ''
  };

  constructor(
    private taskService: TaskService,
    private toastController: ToastController
  ) {}

  async guardarTarea(): Promise<void> { 
    if (!this.form.titulo.trim() ||!this.form.fechaLimite) {
    this.mensajeToast = 'El título y la fecha límite son obligatorios.';
    this.mostrarToast = true;
    return;
  }
  await this.taskService.addTask({
    titulo: this.form.titulo,
    descripcion: this.form.descripcion,
    fechaLimite: this.form.fechaLimite,
    estado: this.form.estado,
    prioridad: this.form.prioridad,
    categoria: this.form.categoria
  });
  this.form = {
    titulo: '',
    descripcion: '',
    fechaLimite: '',
    estado: 'Pendiente',
    prioridad: 'media',
    categoria: ''
  };
  this.mensajeToast = 'Tarea creada exitosamente.';
  this.mostrarToast = true;

}
}