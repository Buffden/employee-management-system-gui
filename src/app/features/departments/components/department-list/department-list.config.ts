import { overlayType } from "../../../../shared/models/dialog";
import { ColumnType, FormMode, TableConfig } from "../../../../shared/models/table";

export const departmentListConfig: TableConfig = {
    detailsCardTitle: 'Departments Details',
    additionCardTitle: 'Add Department',
    tableTitle: 'Department List',
    editCardTitle: 'Edit Department',
    columns: [
        {
            key: 'name', header: 'Department Name', sortable: true, type: ColumnType.LINK, isSticky: true,
            formField: {
                label: 'Name',
                formControlName: 'name',
                placeholder: 'Enter name',
                errorMessage: 'Name is required'
            }
        },
        { key: 'description', header: 'Description', sortable: false, type: ColumnType.TEXT,
            formField: {
                label: 'Description',
                formControlName: 'description',
                placeholder: 'Enter description',
                errorMessage: 'Description is required'
            },
         },
        { key: 'id', header: 'ID', sortable: true, type: ColumnType.TEXT },
        { key: 'totalEmployees', header: 'Total Employees', sortable: true, type: ColumnType.NUMBER },
        {
            key: 'location', header: 'Location', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Location',
                formControlName: 'location',
                placeholder: 'Enter location',
                errorMessage: 'Location is required',
                type: 'text',
            },
        },
        {
            key: 'budget', header: 'Budget', sortable: true, type: ColumnType.NUMBER,
            formField: {
                label: 'Budget',
                formControlName: 'budget',
                placeholder: 'Enter budget',
                errorMessage: 'Budget is required',
                type: 'number',
            },
        },
        {
            key: 'budgetUtilization', header: 'Budget Utilization', sortable: true, type: ColumnType.NUMBER,
            formField: {
                label: 'Budget Utilization',
                formControlName: 'budgetUtilization',
                placeholder: 'Enter budget utilization',
                errorMessage: 'Budget utilization is required',
                type: 'number',
            },
        },
        {
            key: 'performanceMetric', header: 'Performance Metric', sortable: true, type: ColumnType.NUMBER,
            formField: {
                label: 'Performance Metric',
                formControlName: 'performanceMetric',
                placeholder: 'Enter performance metric',
                errorMessage: 'Performance metric is required',
                type: 'number',
            },
        },
        {
            key: 'head', header: 'Head', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Head',
                formControlName: 'head',
                placeholder: 'Select head of department',
                errorMessage: 'Head is required',
                type: 'select',
                options: [], // Populate dynamically with employee names/ids
            },
        },
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