import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { TableCellData } from '../../../../shared/models/table';
import { DepartmentService } from '../../services/department.service';
import { departmentListConfig } from './department-list.config';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule, SharedModule, TableComponent],
  providers: [DepartmentService],
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
})
export class DepartmentListComponent implements OnInit {
  departments: TableCellData[] = [];
  departmentTableConfig = departmentListConfig;
  constructor(private departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments: TableCellData[]) => {
      this.departments = departments;
    });
  }
}
