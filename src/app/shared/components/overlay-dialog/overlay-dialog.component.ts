import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog';
import { TableCellData } from '../table/table.component';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-overlay-dialog',
  imports: [SharedModule],
  templateUrl: './overlay-dialog.component.html',
  styleUrl: './overlay-dialog.component.css'
})
export class OverlayDialogComponent {
  dialogData: DialogData = {
    title: 'Default Title',
    content: {
      // initialize with properties of TableCellData
    } as TableCellData
  };

  constructor(public dialogRef: MatDialogRef<OverlayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.dialogData = data;
    console.log('OverlayDialogComponent.constructor() data', data);
  }

  closeOverlay(): void {
    this.dialogRef.close();
  }
}
