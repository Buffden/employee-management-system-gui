import { Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Employee } from '../../models/employee.model';
import { Department } from '../../models/department.model';
import { Column, TableConfig, TableData } from '../../models/table';
import { defaultTableConfig } from './table.config';

export type TableCellData = Employee | Department | TableData;

@Component({
  selector: 'app-table',
  imports: [MatTableModule, CommonModule, SharedModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnChanges {
  @Input() inputData: TableCellData[] = [];
  @Input() tableConfig: TableConfig = defaultTableConfig;

  displayedColumns: string[] = [];
  dataSource!: MatTableDataSource<any>;
  pageSize: number = 0;
  pageSizeOptions: number[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableConfig']) {
      this.handleTableConfig(changes['tableConfig'].currentValue);
    }

    if (changes['inputData']) {
      this.handleTableDataChange(changes['inputData'].currentValue);
    }
  }

  handleTableConfig(config: TableConfig): void {
    this.displayedColumns = config.columns?.map((column: Column) => column.key) || [];
    this.pageSize = config.pageSize || 10;
    this.pageSizeOptions = config.pageSizeOptions ?? defaultTableConfig.pageSizeOptions ?? [];
  }

  handleTableDataChange(tabData: any): void {
    const genTableData = tabData.map((data: TableCellData) => {
      return {
        id: data.id,
        name: data.name,
        description: 'description' in data ? data.description : undefined,
        totalEmployees: 'totalEmployees' in data ? data.totalEmployees : undefined,
        address: data.address,
        email: data.email,
        phone: data.phone,
        department: 'department' in data ? data.department.name : undefined,
        designation: 'designation' in data ? data.designation : undefined,
        joiningDate: 'joiningDate' in data ? data.joiningDate : undefined,
        manager: 'manager' in data ? data.manager : 'N/A',
      };
    });
    this.dataSource = new MatTableDataSource(genTableData);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
