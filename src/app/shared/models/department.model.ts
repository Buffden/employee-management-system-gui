import { TableData } from "./table";
import { Employee } from "./employee.model";

export interface Department extends TableData {
    description: string;
    totalEmployees: number;
    id: number;
    location?: string;
    budget?: number;
    budgetUtilization?: number;
    performanceMetric?: number;
    head?: Employee | null;
}

export interface DepartmentFormField {
    label: string;
    formControlName: string;
    placeholder: string;
    errorMessage: string;
    type?: string;
    options?: string[];
}