import { overlayType } from "../../../../shared/models/dialog";
import { ColumnType, FormMode, TableConfig } from "../../../../shared/models/table";

export const employeeListConfig: TableConfig = {
    tableTitle: 'Employee List',
    detailsCardTitle: 'Employee Details',
    additionCardTitle: 'Add Employee',
    editCardTitle: 'Edit Employee',
    columns: [
        {
            key: 'name', header: 'Employee Name', sortable: true, type: ColumnType.LINK, isSticky: true,
            formField: {
                label: 'Name',
                formControlName: 'name',
                placeholder: 'Enter name',
                errorMessage: 'Name is required'
            }
        },
        {
            key: 'department', header: 'Department', sortable: false, type: ColumnType.DEPARTMENT,
            formField: {
                label: 'Department',
                formControlName: 'department',
                placeholder: 'Enter department',
                errorMessage: 'Department is required'
            },
        },
        {
            key: 'designation', header: 'Designation', sortable: true, type: ColumnType.NUMBER,
            formField: {
                label: 'Designation',
                formControlName: 'designation',
                placeholder: 'Enter Designation',
                errorMessage: 'Designation is required'
            },
        },
        {
            key: 'email', header: 'Email', sortable: true, type: ColumnType.EMAIL,
            formField: {
                label: 'Email',
                formControlName: 'email',
                placeholder: 'Enter email',
                errorMessage: 'Valid email is required'
            },
        },
        {
            key: 'phone', header: 'Phone', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Phone',
                formControlName: 'phone',
                placeholder: 'Enter phone',
                errorMessage: 'Phone is required'
            },
        },
        {
            key: 'manager', header: 'Manager', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Manager',
                formControlName: 'manager',
                placeholder: 'Enter Manager',
                errorMessage: 'Manager is required'
            },
        },
        {
            key: 'salary', header: 'Salary', sortable: true, type: ColumnType.NUMBER,
            formField: {
                label: 'Salary',
                formControlName: 'salary',
                placeholder: 'Enter salary',
                errorMessage: 'Salary is required'
            },
        },
        { key: 'id', header: 'ID', sortable: true, type: ColumnType.NUMBER },
        { key: 'joiningDate', header: 'Joining Date', sortable: true, type: ColumnType.DATE },
        {
            key: 'address', header: 'Address', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Address',
                formControlName: 'address',
                placeholder: 'Enter address',
                errorMessage: 'Address is required'
            },
        },
        {
            key: 'employmentType', header: 'Employment Type', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Employment Type',
                formControlName: 'employmentType',
                placeholder: 'Select employment type',
                errorMessage: 'Employment type is required',
                type: 'select',
                options: ['Full-Time', 'Part-Time', 'Contractor', 'Intern'],
            },
        },
        {
            key: 'workLocation', header: 'Work Location', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Work Location',
                formControlName: 'workLocation',
                placeholder: 'Enter work location',
                errorMessage: 'Work location is required',
                type: 'text',
            },
        },
        {
            key: 'experienceYears', header: 'Experience (Years)', sortable: true, type: ColumnType.NUMBER,
            formField: {
                label: 'Experience Years',
                formControlName: 'experienceYears',
                placeholder: 'Enter years of experience',
                errorMessage: 'Experience years is required',
                type: 'number',
            },
        },
        {
            key: 'performanceRating', header: 'Performance Rating', sortable: true, type: ColumnType.NUMBER,
            formField: {
                label: 'Performance Rating',
                formControlName: 'performanceRating',
                placeholder: 'Enter performance rating',
                errorMessage: 'Performance rating is required',
                type: 'number',
            },
        },
        {
            key: 'lastAppraisalDate', header: 'Last Appraisal Date', sortable: true, type: ColumnType.DATE,
            formField: {
                label: 'Last Appraisal Date',
                formControlName: 'lastAppraisalDate',
                placeholder: 'Select last appraisal date',
                errorMessage: 'Last appraisal date is required',
                type: 'date',
            },
        },
        {
            key: 'isActive', header: 'Active', sortable: true, type: ColumnType.TEXT,
            formField: {
                label: 'Is Active',
                formControlName: 'isActive',
                placeholder: '',
                errorMessage: '',
                type: 'checkbox',
            },
        },
    ],
    pageSize: 10,
    pageSizeOptions: [5, 10, 25, 50, 100],
    displayActionButtons: true,
    viewController: overlayType.DISPLAYEMPLOYEE,
    additionController: overlayType.ADDEMPLOYEE,
    editController: overlayType.EDITEMPLOYEE,
    allowGenericButtons: true,
    allowExport: true,
    allowAddButton: true,
    allowCustomize: true,
    noDataInfo: {
        title: 'No Employee Data Found',
        description: 'No data available for the selected criteria',
        image: new URL('https://via.placeholder.com/150'),
    },
    mode: FormMode.VIEW
};