import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import {FormControl, Validators} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminModule } from './admin/admin.module';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UsersModule } from './users/users.module';
import { FacultyModule } from './faculty/faculty.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    UsersModule,
    AdminModule,
    SharedModule,
    MatFormFieldModule,
    FacultyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
