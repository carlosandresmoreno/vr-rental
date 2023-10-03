import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeUserComponent } from './home-user/home-user.component';
import { RentalUserComponent } from './rental-user/rental-user.component';
import { RentalAdminComponent } from './rental-admin/rental-admin.component';

const routes: Routes = [
  { path: '', component: HomeUserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeUserComponent },
  { path: 'rental', component: RentalUserComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'rental-admin', component: RentalAdminComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
