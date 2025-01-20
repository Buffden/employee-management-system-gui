import { TableCellData } from "../components/table/table.component";

export enum overlayType {
    ADDEMPLOYEE = 'addEmployee',
    EDITEMPLOYEE = 'editEmployee',
    ADDDEPARTMENT = 'addDepartment',
    EDITDEPARTMENT = 'editDepartment',
    DISPLAYEMPLOYEE = 'displayEmployee',
    DISPLAYDEPARTMENT = 'displayDepartment',
    NODATA = 'noData'
}

export interface DialogData {
    // define the properties of DialogData here
    title: string;
    content: TableCellData;
    viewController: overlayType;
}