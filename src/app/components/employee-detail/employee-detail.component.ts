import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/services/employees/employee.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeId : number;
  public employee : Employee;

  constructor(private httpRoute : ActivatedRoute,
              private employeeService : EmployeeService,
              private router : Router ) { }

  ngOnInit(): void {
    this.employeeId = this.httpRoute.snapshot.params['id'];
    console.log(this.employeeId);
    
    this.employeeService.find(this.employeeId).subscribe(
      (data : Employee) => {
        this.employee = data;
      }
    )
   }


  goHome() {
    this.router.navigateByUrl('/')
  }



}
