import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public apiUrl = 'http://localhost:3000/posts';

  constructor( private http : HttpClient ) { }

  addEmployee(employee : any):Observable<any>{
    return this.http.post(this.apiUrl, employee)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll():Observable<any> {
    return this.http.get(this.apiUrl)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  find(id : number): Observable<any>{
    return this.http.get(this.apiUrl + '/' + id)
  }
  

  deleteEmdployee(id : number) : Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    );
  }

  edithEmployee(id: number, employee: any):Observable<any>{
    return this.http.put(this.apiUrl + '/' + id, employee)
  }


  errorHandler(error:any){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
