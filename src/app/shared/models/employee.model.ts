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

export interface EmployeeRequest {
    name: string;
    designation: string;
    salary: number;
    department: DepartmentID;
    manager: ManagerID;
    phone: string;
    address: string;
    email: string;
}

export interface ManagerID {
    id: Employee | ManagerID;
}

export interface DepartmentID {
    id: Department | DepartmentID;
}