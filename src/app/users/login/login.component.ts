import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser !: FormGroup

  constructor( private loginbuilders : FormBuilder,
               private http : HttpClient,
               private route : Router ) { }

  ngOnInit(): void {
    this.loginUser = this.loginbuilders.group({
      email : [''],
      password : ['']
    })
  }

  login(){
    this.http.get<any>("http://localhost:3000/signupUsers").subscribe(
      data => {
        const user = data.find((x:any) => {
          return x.email === this.loginUser.value.email && x.password === this.loginUser.value.password
        });
        if (user) {
          console.log('Login success');
          this.loginUser.reset()          ;
          this.route.navigate(["dashboard"])

        }else{
          alert('user not exist');
          this.route.navigate(['register'])
          
        }
      }
    )

  }

}
