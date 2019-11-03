import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ErrorComponent } from './error/error.component';
import { GuardServiceService } from './service/guard-service.service';


const routes: Routes = [
  {path:"home",component: HomeComponent,canActivate:[GuardServiceService]},
  {path:"login",component: LoginComponent},
  {path:"logout",component: LogoutComponent,canActivate:[GuardServiceService]},
  {path:"signup",component: SignupComponent},
  {path:"**",component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
