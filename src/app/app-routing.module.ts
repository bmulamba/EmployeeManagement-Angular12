import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';


const routes: Routes = [
  {path : '', component : ListEmployeeComponent},
  {path : 'add', component : AddEmployeeComponent},
  {path : 'edith/:id', component : EmployeeUpdateComponent},
  {path : 'employee/:id', component : EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
