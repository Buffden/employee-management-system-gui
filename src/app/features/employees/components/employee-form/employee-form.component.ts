import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { DialogData } from '../../../../shared/models/dialog';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormMode } from '../../../../shared/models/table';
import { EmployeeFormField } from '../../../../shared/models/employee.model';

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee: DialogData | undefined;
  @Output() employeeResponse: EventEmitter<DialogData> = new EventEmitter<DialogData>();

  FormFields: EmployeeFormField[] = [];
  initialFormValues = {};
  mode: FormMode = FormMode.ADD;
  employeeForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    department: new FormControl(''),
    designation: new FormControl(''),
    phone: new FormControl(''),
    manager: new FormControl(''),
  });

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.initForm();
    if (this.employee?.config.mode === 'edit') {
      this.loadEmployeeDetails(this.employee);
    }
  }

  initForm() {
    this.FormFields = this.createFormFields();
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      phone: ['', Validators.required],
      manager: ['', Validators.required],
    });
  }

  loadEmployeeDetails(employee: DialogData) {
    this.employeeForm?.patchValue({
      name: employee.content.name,
      email: employee.content.email,
      address: employee.content.address,
      department: 'department' in employee.content ? String(employee.content.department) : undefined,
      designation: 'designation' in employee.content ? String(employee.content.designation) : undefined,
      phone: employee.content.phone,
      manager: 'manager' in employee.content ? String(employee.content.manager) : ' ',
    });
    this.initialFormValues = this.employeeForm.getRawValue();
  }

  onSubmit() {
    if (this.employee?.config.mode === 'add') {
      this.addEmployee();
    } else {
      this.updateEmployee(this.employee as DialogData);
    }
  }

  addEmployee() {
    const employeeData = this.employeeForm!.value;
    console.log('Adding employee:', employeeData);
    this.employeeResponse.emit({ content: employeeData } as DialogData);
  }

  updateEmployee(employee: DialogData) {
    console.log('Updating employee:', employee);
    const employeeData = this.employeeForm!.value;
    console.log('Updating employee:', employeeData);
  }

  submitButtonText() {
    return this.employee?.config.mode === 'add' ? 'Add Employee' : 'Update Employee';
  }

  isSubmitDisabled(): boolean {
    if (this.mode === 'add') {
      return this.employeeForm.invalid;
    } else if (this.mode === 'edit') {
      return (
        this.employeeForm.invalid ||
        JSON.stringify(this.initialFormValues) ===
        JSON.stringify(this.employeeForm.getRawValue())
      );
    }
    return true;
  }

  isFieldInvalid(field: EmployeeFormField): boolean {
    return (this.employeeForm.get(field.formControlName)?.invalid && this.employeeForm.get(field.formControlName)?.touched) || false;
  }

  dialogClose() {
    console.log('dialog close');
    this.employeeResponse.emit({} as DialogData);
  }

  createFormFields(): EmployeeFormField[] {
    return this.employee?.config.columns?.map((column) => column.formField).filter((field): field is EmployeeFormField => field !== undefined) || [];
  }
}
