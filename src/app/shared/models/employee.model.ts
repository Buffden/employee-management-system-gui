import { Department } from "./department.model";
import { TableData } from "./table";

export interface Employee extends TableData {
    designation: string;
    salary: number;
    department: Department;
    manager: Employee;
    workLocation: string;
}