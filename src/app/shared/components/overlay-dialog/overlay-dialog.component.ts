import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DialogData, EmployeeDisplayData, overlayType } from '../../models/dialog';
import { TableCellData } from '../table/table.component';
import { SharedModule } from '../../shared.module';
import { DepartmentFormComponent } from '../../../features/departments/components/department-form/department-form.component';
import { EmployeeFormComponent } from '../../../features/employees/components/employee-form/employee-form.component';

@Component({
  selector: 'app-overlay-dialog',
  imports: [SharedModule, DepartmentFormComponent, EmployeeFormComponent],
  templateUrl: './overlay-dialog.component.html',
  styleUrl: './overlay-dialog.component.css'
})
export class OverlayDialogComponent {
  overlayType = overlayType;
  textFields: { label: string, value: string | number }[] = [];
  dialogData: DialogData = {
    title: 'Default Title',
    viewController: overlayType.NODATA,
    config: {
      tableTitle: '',
      detailsCardTitle: '',
      additionCardTitle: '',
      viewController: overlayType.NODATA,
      editCardTitle: '',
      additionController: overlayType.NODATA,
      editController: overlayType.NODATA
    },
    content: {
      // initialize with properties of TableCellData
    } as TableCellData
  };

  constructor(public dialogRef: MatDialogRef<OverlayDialogComponent>,
    public matDialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dialogData = data;
    console.log('OverlayDialogComponent.constructor() data', data);
    this.textFields = this.getFilteredTextFields();
  }

  getFilteredTextFields(): { label: string, value: string | number }[] {
    const sampleEmployeeData: EmployeeDisplayData = {
      name: '',
      id: 0,
      designation: '',
      phone: '',
      email: '',
      joiningDate: '',
      workLocation: '',
    };
    return Object.keys(sampleEmployeeData).map((key: string) => {
      return { label: key.toUpperCase(), value: this.dialogData.content[key as keyof TableCellData] || 'NA' };
    });
  }

  updateTableData(): void {
    console.log('Update table data triggered');
  }

  dialogClose(): void {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }

  triggerEdit(): void {
    this.dialogClose();
    console.log('Edit triggered', this.dialogData);
    this.dialogRef = this.matDialog.open(OverlayDialogComponent, {
      width: '850px',
      data: {
        title: this.dialogData.config.editCardTitle,
        viewController: this.dialogData.config.editController,
        content: this.dialogData.content
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      console.log('edit afterClosed', result);
      this.updateTableData();
    });
  }
}
