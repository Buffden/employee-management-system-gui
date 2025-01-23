import { overlayType } from "../../../../shared/models/dialog";
import { ColumnType, FormMode, TableConfig } from "../../../../shared/models/table";

export const departmentListConfig: TableConfig = {
    detailsCardTitle: 'Departments Details',
    additionCardTitle: 'Add Department',
    tableTitle: 'Department List',
    editCardTitle: 'Edit Department',
    columns: [
        { key: 'name', header: 'Department Name', sortable: true, type: ColumnType.LINK, isSticky: true },
        { key: 'description', header: 'Description', sortable: false, type: ColumnType.TEXT },
        { key: 'id', header: 'ID', sortable: true, type: ColumnType.TEXT },
        { key: 'totalEmployees', header: 'Total Employees', sortable: true, type: ColumnType.NUMBER },
    ],
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
    viewController: overlayType.DISPLAYDEPARTMENT,
    additionController: overlayType.ADDDEPARTMENT,
    editController: overlayType.EDITDEPARTMENT,
    allowGenericButtons: true,
    allowAddButton: true,
    allowCustomize: true,
    allowExport: true,
    noDataInfo: {
        title: 'No Department Data Found',
        description: 'No data available for the selected criteria',
        image: new URL('https://via.placeholder.com/150'),
    },
    mode: FormMode.VIEW
};