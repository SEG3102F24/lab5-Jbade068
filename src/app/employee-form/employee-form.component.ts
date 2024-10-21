import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule if using ngModel

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  standalone: true, // Ensure standalone is set to true
  imports: [FormsModule] // Add FormsModule to support ngModel if needed
})
export class EmployeeFormComponent {
  employee = { name: '', email: '', position: '' };

  submitEmployeeForm() {
    console.log('Form submitted:', this.employee);
    
    // Add logic to save employee data
  }
}

