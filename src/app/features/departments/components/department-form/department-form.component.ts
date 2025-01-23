import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DialogData } from '../../../../shared/models/dialog';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent {
  @Input() department: DialogData | undefined;

}
