import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.services';
import { Task, TaskStatus} from '../models/task.model';
import { addIcons } from 'ionicons';
import { CommonModule } from '@angular/common';
import { trash, create, checkmarkDone } from 'ionicons/icons';
import { IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonButton, 
  IonButtons, 
  IonIcon, 
  IonBadge, 
  IonSelect, 
  IonSelectOption,
} 
  from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    CommonModule,  // Agregado para *ngFor
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent,
    IonList, 
    IonItem, 
    IonLabel, 
    IonButton, 
    IonButtons, 
    IonIcon, 
    IonBadge, 
    IonSelect, 
    IonSelectOption
  ]
})

export class Tab1Page implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    addIcons({ trash, create, checkmarkDone});
  }
  ngOnInit(): void {
    this.loadTasks();
  }
  ionViewWillEnter(): void {
    this.loadTasks();
  }
  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }
  async deleteTask(id: string): Promise<void> {
    await this.taskService.deleteTask(id);
    this.loadTasks();
  }
  async updateTaskStatus(id: string, status: TaskStatus): Promise<void> {
    await this.taskService.changeStatus(id, status);
    this.loadTasks();
  }
}
