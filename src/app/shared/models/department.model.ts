import { TableData } from "./table";

export interface Department extends TableData {
    description: string;
    totalEmployees: number;
}