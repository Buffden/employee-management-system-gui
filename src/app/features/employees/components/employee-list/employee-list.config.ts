import { ColumnType, TableConfig } from "../../../../shared/models/table";

export const employeeListConfig: TableConfig = {
    tableTitle: 'Employee List',
    columns: [
        { key: 'name', header: 'Employee Name', sortable: true, type: ColumnType.STRING, isSticky: true },
        { key: 'department', header: 'Department', sortable: false, type: ColumnType.STRING },
        { key: 'designation', header: 'Designation', sortable: true, type: ColumnType.NUMBER },
        { key: 'email', header: 'Email', sortable: true, type: ColumnType.STRING },
        { key: 'phone', header: 'Phone', sortable: true, type: ColumnType.STRING },
        { key: 'manager', header: 'Manager', sortable: true, type: ColumnType.STRING },
        { key: 'id', header: 'ID', sortable: true, type: ColumnType.NUMBER },
        { key: 'joiningDate', header: 'Joining Date', sortable: true, type: ColumnType.DATE },
        { key: 'address', header: 'Address', sortable: true, type: ColumnType.STRING },
    ],
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
    displayActionButtons: true,
};