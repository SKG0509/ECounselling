import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyDashboardComponent } from './faculty-dashboard/faculty-dashboard.component';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { FacultyRegisterStudentListComponent } from './faculty-register-student-list/faculty-register-student-list.component';

const routes: Routes = [
  {
    path: 'faculty-login',
    component: FacultyLoginComponent,
  },
  {
    path: 'faculty-list',
    component: FacultyListComponent,
  },
  {
    path: 'faculty-register-student-list',
    component: FacultyRegisterStudentListComponent,
  },
  {
    path: 'faculty-dashboard',
    component: FacultyDashboardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
