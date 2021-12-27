import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
// import { FooterComponent } from '../footer/footer.component';
// import { HeaderComponent } from '../header/header.component';



@NgModule({
  declarations: [
    // FooterComponent,
    // HeaderComponent
  
    HeaderComponent,
    FooterComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // FooterComponent,
    // HeaderComponent
  ]
})
export class SharedModule { }
