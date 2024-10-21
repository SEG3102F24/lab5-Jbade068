import { Component } from '@angular/core';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [EmployeeFormComponent, EmployeeListComponent] // Import the components
})
export class AppComponent {}
