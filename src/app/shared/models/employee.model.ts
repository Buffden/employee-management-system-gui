import { Department } from "./department.model";
import { TableData } from "./table";

export interface Employee extends TableData {
    designation: string;
    salary: number;
    department: Department;
    manager: Employee;
}

export interface EmployeeFormField {
    label: string;
    formControlName: string;
    placeholder: string;
    errorMessage: string;
}