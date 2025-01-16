import { ColumnType, TableConfig } from "../../../../shared/models/table";

export const employeeListConfig: TableConfig = {
    tableTitle: 'Employee List',
    columns: [
        { key: 'name', header: 'Employee Name', sortable: true, type: ColumnType.LINK, isSticky: true },
        { key: 'department', header: 'Department', sortable: false, type: ColumnType.TEXT },
        { key: 'designation', header: 'Designation', sortable: true, type: ColumnType.NUMBER },
        { key: 'email', header: 'Email', sortable: true, type: ColumnType.EMAIL },
        { key: 'phone', header: 'Phone', sortable: true, type: ColumnType.TEXT },
        { key: 'manager', header: 'Manager', sortable: true, type: ColumnType.TEXT },
        { key: 'id', header: 'ID', sortable: true, type: ColumnType.NUMBER },
        { key: 'joiningDate', header: 'Joining Date', sortable: true, type: ColumnType.DATE },
        { key: 'address', header: 'Address', sortable: true, type: ColumnType.TEXT },
    ],
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
    displayActionButtons: true,
};