import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/components/dashboard/dashboard.component').then(
        (m) => m.DashboardComponent
      ),
  },
  {
    path: 'employees',
    loadComponent: () =>
      import(
        './features/employees/components/employee-list/employee-list.component'
      ).then((m) => m.EmployeeListComponent),
  },
  {
    path: 'departments',
    loadComponent: () =>
      import(
        './features/departments/components/department-list/department-list.component'
      ).then((m) => m.DepartmentListComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
