import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../models/dialog';

@Component({
  selector: 'app-overlay-dialog',
  imports: [],
  templateUrl: './overlay-dialog.component.html',
  styleUrl: './overlay-dialog.component.css'
})
export class OverlayDialogComponent {
  constructor(public dialogRef: MatDialogRef<OverlayDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    console.log('OverlayDialogComponent.constructor() data', data);
  }
}
