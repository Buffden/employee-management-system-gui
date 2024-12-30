import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared/shared.module';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent {}
