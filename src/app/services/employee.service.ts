import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public aipUrl = 'http://localhost:3000/posts';

  constructor( private http : HttpClient ) { }

  addEmployee(employee : any){
    return this.http.post(this.aipUrl, employee);
  }

  getAll(){
    return this.http.get(this.aipUrl);
  }

  deteleEmployee(data : any){
    return this.http.delete(`${this.aipUrl}/${data}`)
  }

}
