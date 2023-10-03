import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { RentalUserComponent } from './rental-user/rental-user.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { RentalAdminComponent } from './rental-admin/rental-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeUserComponent,
    RentalUserComponent,
    HomeAdminComponent,
    RentalAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
