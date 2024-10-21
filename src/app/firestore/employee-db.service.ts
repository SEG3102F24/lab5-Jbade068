import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employees = [
    { name: 'John Doe', email: 'john@example.com', position: 'Manager' },
    { name: 'Jane Smith', email: 'jane@example.com', position: 'Developer' }
  ];

  getEmployees() {
    return this.employees; // Return the employee list
  }

  addEmployee(employee: any) {
    console.log('Adding employee:', employee); // Debugging log to see if the employee is added
    this.employees.push(employee); // Add the employee to the list
  }
}
