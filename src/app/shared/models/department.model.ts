import { TableData } from "./table";

export interface Department extends TableData {
    description: string;
    totalEmployees: number;
    id: number;
}

export interface DepartmentFormField {
    label: string;
    formControlName: string;
    placeholder: string;
    errorMessage: string;
}