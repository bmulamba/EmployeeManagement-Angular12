import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employees/employee.service';
import { Employee } from './../../model/employee'

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  constructor( private employeService : EmployeeService ) { }

  public employees : Employee[] = [];
  searchItem : any

  ngOnInit(): void {
    this.employeService.getAll().subscribe(
      data =>{
        this.employees = data;
      }
    )
  }

  delete(id: number) {
    this.employeService.deleteEmdployee(id).subscribe(
      res => {
        this.employees = this.employees.filter(item => item.id !== id)
      }
    )
  }

  

}
