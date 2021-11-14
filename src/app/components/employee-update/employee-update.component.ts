import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from './../../services/employee.service'

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  constructor( private employeeService : EmployeeService, 
    private router : Router ) { }

    isAlert : boolean = false;
  

  addEmployeenew = new FormGroup({
    name : new FormControl(''),
    surname : new FormControl(''),
    mobile : new FormControl(''),
    email : new FormControl(''),
    position : new FormControl(''),
    salary : new FormControl(''),
  })

  ngOnInit(): void {
  }

  newEmployee() {
    this.employeeService.addEmployee(this.addEmployeenew.value).subscribe(
      res => {
        console.log(res);        
      }
    );
    this.ngOnInit()
    this.addEmployeenew.reset({});
    this.openAlert();
    setTimeout(() => {
      this.closeAlert();
    }, 3000);
    // this.router.navigate(['/']);
  }

  closeAlert() {
    this.isAlert = false;
  }

  openAlert() {
    this.isAlert = true;
  }

}

