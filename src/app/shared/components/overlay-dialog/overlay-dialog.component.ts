import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData, EmployeeDisplayData, overlayType } from '../../models/dialog';
import { TableCellData } from '../table/table.component';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-overlay-dialog',
  imports: [SharedModule],
  templateUrl: './overlay-dialog.component.html',
  styleUrl: './overlay-dialog.component.css'
})
export class OverlayDialogComponent {
  overlayType = overlayType;
  textFields: { label: string, value: string | number }[] = [];
  dialogData: DialogData = {
    title: 'Default Title',
    viewController: overlayType.NODATA,
    content: {
      // initialize with properties of TableCellData
    } as TableCellData
  };

  constructor(public dialogRef: MatDialogRef<OverlayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dialogData = data;
    console.log('OverlayDialogComponent.constructor() data', data);
    this.textFields = this.getFilteredTextFields();
  }

  closeOverlay(): void {
    this.dialogRef.close();
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

  triggerEdit(): void {
    console.log('Edit triggered');
  }
}
