import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardautSer:HardcodeAuthenticationService,private route:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

   // return this.hardautSer.isLoginedUser()? true:  false;
   if(this.hardautSer.isLoginedUser())
    return true;
    this.route.navigate(['login'])
    return false;
  }
}
