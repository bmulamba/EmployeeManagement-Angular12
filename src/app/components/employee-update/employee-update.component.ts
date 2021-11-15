import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from './../../services/employee.service'

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {

  public employeeId : number;
  // empoyee : Employee;

  constructor( private employeeService : EmployeeService, 
               private route : Router,
               private router : ActivatedRoute ) { }

  isAlert : boolean = false;

  Editheemployee = new FormGroup({
    name : new FormControl(''),
    surname : new FormControl(''),
    mobile : new FormControl(''),
    email : new FormControl(''),
    position : new FormControl(''),
    salary : new FormControl(''),
  })

  ngOnInit(): void {

    this.employeeId = this.router.snapshot.params['id']
    this.employeeService.find(this.employeeId).subscribe(
      (data : Employee) => {
        this.Editheemployee = new FormGroup({
          name : new FormControl(data['name']),
          surname : new FormControl(data['surname']),
          mobile : new FormControl(data['mobile']),
          email : new FormControl(data['email']),
          position : new FormControl(data['position']),
          salary : new FormControl(data['salary']),
        })
      }
    )    
  }

  edithemployee() {
    // console.log(this.Editheemployee.value);
    this.employeeService.edithEmployee(this.employeeId, this.Editheemployee.value).subscribe(
     (data : Employee) => {
       console.log(data);
     }
   );
  //  console.log(this.Editheemployee.value);
  this.Editheemployee.reset();
  setTimeout(() => {
    this.openAlert()
  }, 2000)
   
  }


  closeAlert() {
    this.isAlert = false;
  }

  openAlert() {
    this.isAlert = true;
  }

  goHome(){
    this.route.navigateByUrl('/')
  }

}

