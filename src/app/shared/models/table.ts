import { Department } from "./department.model";
import { Employee } from "./employee.model";

export type TableCellData = Employee | Department | TableData;

export interface TableData {
    name: string;
    id: number;
    address: string;
    email: string;
    phone: string;
};

export interface TableConfig {
    columns?: Column[];
    pageSize?: number;
    pageSizeOptions?: number[];
};

export interface Column {
    key: string;
    header: string;
    type: string;
    sortable?: boolean;
}