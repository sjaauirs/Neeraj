import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { EmployeeComponent } from './Employee/Employee.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Route[] = [
    { path: '**', redirectTo: 'login' },
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'login', component: LoginComponent },
   
  ];
