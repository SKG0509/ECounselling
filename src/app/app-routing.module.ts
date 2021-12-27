import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserSignupComponent } from './users/user-signup/user-signup.component';
import { UserDocumentComponent } from './users/user-document/user-document.component';

const routes: Routes = [
  {
    path: 'user-login',
    component: UserLoginComponent
  },
  {
    path: 'user-signup',
    component: UserSignupComponent
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path: 'user-document',
    component: UserDocumentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
