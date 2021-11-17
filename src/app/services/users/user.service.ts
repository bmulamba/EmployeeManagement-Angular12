import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userapi : 'http://localhost:3000/signupUsers'

  constructor( private http : HttpClient ) { }

  registerUser(user : any){
    return this.http.post<any>(this.userapi, user)
  }


}
