import { Department } from "./department.model";
import { Employee } from "./employee.model";

export type TableCellData = Employee | Department | TableData;

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc',
};

export interface TableData {
    name: string;
    id: number;
    address: string;
    email: string;
    phone: string;
};

export interface TableConfig {
    tableTitle: string;
    columns?: Column[];
    pageSize?: number;
    pageSizeOptions?: number[];
};

export interface Column {
    key: string;
    header: string;
    type: string;
    sortable?: boolean;
    sortDirection?: SortDirection;
    isSticky?: boolean;
}