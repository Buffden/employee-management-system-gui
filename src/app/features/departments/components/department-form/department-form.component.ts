import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared/shared/shared.module';

@Component({
  selector: 'app-department-form',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})
export class DepartmentFormComponent {

}
