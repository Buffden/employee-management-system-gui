import { Department } from "./department.model";
import { overlayType } from "./dialog";
import { Employee } from "./employee.model";

export type TableCellData = Employee | Department | TableData;

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc',
};

export interface TableData {
    name: string;
    id: number;
    address: string;
    email: string;
    phone: string;
};

export interface TableConfig {
    tableTitle: string;
    columns?: Column[];
    pageSize?: number;
    pageSizeOptions?: number[];
    displayActionButtons?: boolean;
    detailsCardTitle: string;
    additionCardTitle: string;
    viewController: overlayType;
};

export interface Column {
    key: string;
    header: string;
    type: ColumnType;
    sortable?: boolean;
    sortDirection?: SortDirection;
    isSticky?: boolean;
}
export enum ColumnType {
    TEXT = 'text',
    NUMBER = 'number',
    DATE = 'date',
    ACTION_BUTTONS = 'actionButtons',
    EMAIL = 'email',
    LINK = 'link',
}

export const ActionButtonObject: Column = {
    key: 'actions',
    header: 'Actions',
    type: ColumnType.ACTION_BUTTONS,
    sortable: false,
    isSticky: true,
}