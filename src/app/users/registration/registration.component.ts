import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public userRegistration !: FormGroup;

  constructor( private formBuilder : FormBuilder ,
               private http : HttpClient, private _router : Router ) { }

  ngOnInit(): void {
    this.userRegistration = this.formBuilder.group({
      name : [''],
      mobile :[''],
      email : [''],
      password : ['']
    })
  }

  newRegister(){
    this.http.post<any>('http://localhost:3000/signupUsers', this.userRegistration.value)
    .subscribe(
      data => {
        console.log(data);
        this.userRegistration.reset();
        this._router.navigateByUrl('/login');
      },
      error => {
        console.log(error);
        
      }
      
    )
    
  }

}
