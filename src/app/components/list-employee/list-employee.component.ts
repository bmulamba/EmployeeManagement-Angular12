import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor( private employeService : EmployeeService ) { }

  public employees : any;

  ngOnInit(): void {
    this.employeService.getAll().subscribe(
      data =>{
        this.employees = data;
      }
    )
  }

}
