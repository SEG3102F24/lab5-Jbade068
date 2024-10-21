import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  standalone: true,
  imports: [CommonModule] // Import CommonModule to use *ngFor and other common directives
})
export class EmployeeListComponent {
  employees: any[] = [];

  constructor() {
    // Populate employees or retrieve from a service
    this.employees = [
      { name: 'John Doe', email: 'john@example.com', position: 'Manager' },
      { name: 'Jane Smith', email: 'jane@example.com', position: 'Developer' }
    ];
  }

  ngOnInit(): void {
    // Logic to load employees, if any
  }
}
