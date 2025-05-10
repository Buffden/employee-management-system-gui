import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../../../../shared/models/task.model';
import { TaskService } from '../../services/task.service';
import { Project } from '../../../../shared/models/project.model';
import { ProjectService } from '../../services/project.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatTabsModule
  ]
})
export class TaskDetailsComponent implements OnInit {
  task: Task | null = null;
  project: Project | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.loadTask(taskId);
    }
  }

  loadTask(id: string): void {
    this.taskService.getById(id).subscribe(task => {
      this.task = task;
      if (task.projectId) {
        this.loadProject(task.projectId);
      }
    });
  }

  loadProject(id: string): void {
    this.projectService.getById(id).subscribe(project => {
      this.project = project;
    });
  }

  onEditTask(): void {
    this.router.navigate(['/projects', this.project?.id, 'tasks', this.task?.id, 'edit']);
  }

  onDeleteTask(): void {
    if (confirm('Are you sure you want to delete this task?')) {
      this.taskService.delete(this.task!.id).subscribe(() => {
        this.router.navigate(['/projects', this.project?.id]);
      });
    }
  }

  getStatusColor(status: string): string {
    switch (status.toLowerCase()) {
      case 'active':
      case 'open':
        return 'primary';
      case 'completed':
      case 'closed':
        return 'accent';
      case 'on hold':
      case 'in progress':
        return 'warn';
      default:
        return 'primary';
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority.toLowerCase()) {
      case 'high':
        return 'warn';
      case 'medium':
        return 'accent';
      case 'low':
        return 'primary';
      default:
        return 'primary';
    }
  }
} 