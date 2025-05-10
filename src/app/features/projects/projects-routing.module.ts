import { Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';

export const projectsRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: ':id',
    component: ProjectDetailsComponent
  },
  {
    path: ':projectId/tasks/:id',
    component: TaskDetailsComponent
  }
]; 