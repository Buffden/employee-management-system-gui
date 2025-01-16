import { ColumnType, TableConfig } from "../../../../shared/models/table";

export const departmentListConfig: TableConfig = {
    tableTitle: 'Department List',
    columns: [
        { key: 'name', header: 'Department Name', sortable: true, type: ColumnType.LINK, isSticky: true },
        { key: 'description', header: 'Description', sortable: false, type: ColumnType.TEXT },
        { key: 'id', header: 'ID', sortable: true, type: ColumnType.TEXT },
        { key: 'totalEmployees', header: 'Total Employees', sortable: true, type: ColumnType.NUMBER },
    ],
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
};