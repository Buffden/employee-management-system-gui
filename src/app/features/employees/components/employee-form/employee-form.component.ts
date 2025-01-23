import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DialogData } from '../../../../shared/models/dialog';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  @Input() employee: DialogData | undefined;
}
