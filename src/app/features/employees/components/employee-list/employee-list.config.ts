import { TableConfig } from "../../../../shared/models/table";

export const employeeListConfig: TableConfig = {
    tableTitle: 'Employee List',
    columns: [
        { key: 'address', header: 'address', sortable: true, type: 'string' },
        { key: 'name', header: 'Employee Name', sortable: true, type: 'string' },
        { key: 'department', header: 'Department', sortable: false, type: 'string' },
        { key: 'designation', header: 'Designation', sortable: true, type: 'number' },
        { key: 'email', header: 'Salary', sortable: true, type: 'string' },
        { key: 'phone', header: 'Phone', sortable: true, type: 'string' },
        { key: 'manager', header: 'Manager', sortable: true, type: 'string' },
        { key: 'id', header: 'ID', sortable: true, type: 'number' },
        { key: 'joiningDate', header: 'Joining Date', sortable: true, type: 'date' },
    ],
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
};