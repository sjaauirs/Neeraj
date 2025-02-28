import { Component, OnInit } from '@angular/core';
import { Employee } from './Employee.Model';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

@Component({
  selector: 'employee',
  imports: [FormsModule , CommonModule],
  standalone: true,  // This makes the component standalone.
  templateUrl: './Employee.component.html',
  styleUrls: ['./Employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];
  newEmployee: Employee = new Employee();

  constructor() {}

  ngOnInit(): void {
    // Initialize with some sample data or fetch from an API
    this.employees =[
      {
        "id": 1,
        "name": "Neil Sims",
        "avatar": "neil-sims.png",
        "email": "neil.sims@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Front-end developer",
        "country": "United States",
        "status": "Active"
      },
      {
        "id": 2,
        "name": "Roberta Casas",
        "avatar": "roberta-casas.png",
        "email": "roberta.casas@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Designer",
        "country": "Spain",
        "status": "Active"
      },
      {
        "id": 3,
        "name": "Michael Gough",
        "avatar": "michael-gough.png",
        "email": "michael.gough@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "React developer",
        "country": "United Kingdom",
        "status": "Active"
      },
      {
        "id": 4,
        "name": "Jese Leos",
        "avatar": "jese-leos.png",
        "email": "jese.leos@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Marketing",
        "country": "United States",
        "status": "Active"
      },
      {
        "id": 5,
        "name": "Bonnie Green",
        "avatar": "bonnie-green.png",
        "email": "bonnie.green@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "UI/UX Engineer",
        "country": "Australia",
        "status": "Offline"
      },
      {
        "id": 6,
        "name": "Thomas Lean",
        "avatar": "thomas-lean.png",
        "email": "thomas.lean@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Vue developer",
        "country": "Germany",
        "status": "Active"
      },
      {
        "id": 7,
        "name": "Helene Engels",
        "avatar": "helene-engels.png",
        "email": "helene.engels@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Product owner",
        "country": "Canada",
        "status": "Active"
      },
      {
        "id": 8,
        "name": "Lana Byrd",
        "avatar": "lana-byrd.png",
        "email": "lana.byrd@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Designer",
        "country": "United States",
        "status": "Active"
      },
      {
        "id": 9,
        "name": "Leslie Livingston",
        "avatar": "leslie-livingston.png",
        "email": "leslie.livingston@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Web developer",
        "country": "France",
        "status": "Offline"
      },
      {
        "id": 10,
        "name": "Robert Brown",
        "avatar": "robert-brown.png",
        "email": "robert.brown@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Laravel developer",
        "country": "Russia",
        "status": "Active"
      },
      {
        "id": 11,
        "name": "Neil Sims",
        "avatar": "neil-sims.png",
        "email": "neil.sims@flowbite.com",
        "position": "Front-end developer",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "country": "United States",
        "status": "Active"
      },
      {
        "id": 12,
        "name": "Roberta Casas",
        "avatar": "roberta-casas.png",
        "email": "roberta.casas@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Designer",
        "country": "Spain",
        "status": "Active"
      },
      {
        "id": 13,
        "name": "Michael Gough",
        "avatar": "michael-gough.png",
        "email": "michael.gough@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "React developer",
        "country": "United Kingdom",
        "status": "Active"
      },
      {
        "id": 14,
        "name": "Jese Leos",
        "avatar": "jese-leos.png",
        "email": "jese.leos@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Marketing",
        "country": "United States",
        "status": "Active"
      },
      {
        "id": 15,
        "name": "Bonnie Green",
        "avatar": "bonnie-green.png",
        "email": "bonnie.green@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "UI/UX Engineer",
        "country": "Australia",
        "status": "Offline"
      },
      {
        "id": 16,
        "name": "Thomas Lean",
        "avatar": "thomas-lean.png",
        "email": "thomas.lean@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Vue developer",
        "country": "Germany",
        "status": "Active"
      },
      {
        "id": 17,
        "name": "Helene Engels",
        "avatar": "helene-engels.png",
        "email": "helene.engels@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Product owner",
        "country": "Canada",
        "status": "Active"
      },
      {
        "id": 18,
        "name": "Lana Byrd",
        "avatar": "lana-byrd.png",
        "email": "lana.byrd@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Designer",
        "country": "United States",
        "status": "Active"
      },
      {
        "id": 19,
        "name": "Leslie Livingston",
        "avatar": "leslie-livingston.png",
        "email": "leslie.livingston@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Web developer",
        "country": "France",
        "status": "Offline"
      },
      {
        "id": 20,
        "name": "Robert Brown",
        "avatar": "robert-brown.png",
        "email": "robert.brown@flowbite.com",
        "biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
        "position": "Laravel developer",
        "country": "Russia",
        "status": "Active"
      }
    ];
  }

  openAddEmployeeDialog(): void {
    // Show the modal
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  closeAddEmployeeDialog(): void {
    // Hide the modal
    const modal = document.getElementById('addEmployeeModal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }

  onSubmit(): void {
    if (true) {
      // Submit the form and add new employee to the list
      this.employees.push(this.newEmployee);
      this.newEmployee = new Employee(); // Reset the form
      this.closeAddEmployeeDialog(); // Close the modal
    }
  }
}
