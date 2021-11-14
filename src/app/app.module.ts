import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './widget/alert/alert.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { EmployeeUpdateComponent } from './components/employee-update/employee-update.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    AlertComponent,
    EmployeeDetailComponent,
    EmployeeUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
