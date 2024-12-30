import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Employee } from "../../../shared/models/employee.model";
import { Injectable } from "@angular/core";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class EmployeeService {
    private apiUrl = `${environment.apibaseurl}/employees`;

    constructor(private http: HttpClient) { }

    getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl);
    }

    getEmployee(id: number): Observable<Employee> {
        return this.http.get<Employee>(`${this.apiUrl}/${id}`);
    }

    addEmployee(employee: Employee): Observable<Employee> {
        return this.http.post<Employee>(this.apiUrl, employee);
    }

    updateEmployee(employee: Employee): Observable<Employee> {
        return this.http.put<Employee>(
            `${this.apiUrl}/${employee.id}`,
            employee
        );
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>(`${this.apiUrl}/${id}`);
    }
}
