import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public aipUrl = 'http://localhost:3000/posts';

  constructor( private http : HttpClient ) { }

  addEmployee(employee : any):Observable<any>{
    return this.http.post(this.aipUrl, employee)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll():Observable<any> {
    return this.http.get(this.aipUrl)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  find(id : number): Observable<any>{
    return this.http.get(this.aipUrl + '/' + id)
  }
  

  deleteEmdployee(id : number) : Observable<any> {
    return this.http.delete(this.aipUrl + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    );
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
