import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../../shared/models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { SharedModule } from '../../../../shared/shared/shared.module';
import { TableComponent } from '../../../../shared/components/table/table.component';
import { employeeListConfig } from './employee-list.config';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, SharedModule, TableComponent],
  providers: [EmployeeService],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  employeeListConfig = employeeListConfig;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees: any) => {
      this.employees = employees;
      console.log("Raw response:", employees);
    });
  }
}
