import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { UserDocumentComponent } from './users/user-document/user-document.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { UserRegisterComponent } from './users/user-register/user-register.component';
import { UserStatusComponent } from './users/user-status/user-status.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { FacultyLoginComponent } from './faculty/faculty-login/faculty-login.component';
import { FacultyListComponent } from './faculty/faculty-list/faculty-list.component';
import { FacultyRegisterStudentListComponent } from './faculty/faculty-register-student-list/faculty-register-student-list.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';

const routes: Routes = [
  {
    path: 'user-login',
    component: UserLoginComponent,
  },
  {
    path: 'user-signup',
    component: UserSignupComponent,
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: 'user-document',
    component: UserDocumentComponent,
  },
  {
    path: 'user-profile',
    component: UserProfileComponent,
  },
  {
    path: 'user-register',
    component: UserRegisterComponent,
  },
  {
    path: 'user-status',
    component: UserStatusComponent,
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
  },
  {
    path: 'faculty-login',
    component: FacultyLoginComponent,
  },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
