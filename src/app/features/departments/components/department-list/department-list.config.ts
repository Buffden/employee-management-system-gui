import { TableConfig } from "../../../../shared/models/table";

export const departmentListConfig: TableConfig = {
    tableTitle: 'Department List',
    columns: [
        { key: 'id', header: 'ID', sortable: true, type: 'string' },
        { key: 'name', header: 'Department Name', sortable: true, type: 'string' },
        { key: 'description', header: 'Description', sortable: false, type: 'string' },
        { key: 'totalEmployees', header: 'Total Employees', sortable: true, type: 'number' },
    ],
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
};