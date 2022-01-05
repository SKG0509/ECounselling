import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserDocumentComponent } from './user-document/user-document.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserStatusComponent } from './user-status/user-status.component';
// import {FormControl, Validators} from '@angular/forms';

@NgModule({
  declarations: [
    UserLoginComponent,
    UserSignupComponent,
    UserDashboardComponent,
    UserProfileComponent,
    UserDocumentComponent,
    UserRegisterComponent,
    UserStatusComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    // FormControl,
    // Validators
  ],
  exports: [UserLoginComponent, UserSignupComponent, UserDashboardComponent],
})
export class UsersModule {}
