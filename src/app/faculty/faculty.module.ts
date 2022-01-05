import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyRegisterStudentListComponent } from './faculty-register-student-list/faculty-register-student-list.component';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { FacultySignupComponent } from './faculty-signup/faculty-signup.component';



@NgModule({
  declarations: [
    FacultyLoginComponent,
    FacultyListComponent,
    FacultyRegisterStudentListComponent,
    FacultyDashboardComponent,
    FacultySignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FacultyModule { }
