import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserDocumentComponent } from './user-document/user-document.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserStatusComponent } from './user-status/user-status.component';

const routes: Routes = [
  {
    path: '/user-login',
    component: UserLoginComponent,
  },
  {
    path: '/user-signup',
    component: UserSignupComponent,
  },
  {
    path: '/user-dashboard',
    component: UserDashboardComponent,
  },
  {
    path: '/user-document',
    component: UserDocumentComponent,
  },
  {
    path: '/user-profile',
    component: UserProfileComponent,
  },
  {
    path: '/user-register',
    component: UserRegisterComponent,
  },
  {
    path: '/user-status',
    component: UserStatusComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
