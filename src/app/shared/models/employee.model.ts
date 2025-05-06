import { Department } from "./department.model";
import { TableData } from "./table";

export interface Employee extends TableData {
    designation: string;
    salary: number;
    department: Department;
    manager: Employee;
    employmentType?: string;
    workLocation?: string;
    experienceYears?: number;
    performanceRating?: number;
    lastAppraisalDate?: string;
    isActive?: boolean;
}

export interface EmployeeFormField {
    label: string;
    formControlName: string;
    placeholder: string;
    errorMessage: string;
    type?: string;
    options?: string[];
}

export interface EmployeeRequest {
    name: string;
    designation: string;
    salary: number;
    department: DepartmentID;
    manager: ManagerID | null;
    phone: string;
    address: string;
    email: string;
    employmentType?: string;
    workLocation?: string;
    experienceYears?: number;
    performanceRating?: number;
    lastAppraisalDate?: string;
    isActive?: boolean;
}

export interface ManagerID {
    id: Employee | ManagerID;
}

export interface DepartmentID {
    id: Department | DepartmentID;
}