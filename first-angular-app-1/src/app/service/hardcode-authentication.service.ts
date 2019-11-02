import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }

   authentication(username :string , password:string){
     console.log("before "+this.isLoginedUser());
    if(username === 'ravindra' && password === '123456')
    {
      sessionStorage.setItem("authenticatedUser",username);
      console.log("after "+this.isLoginedUser());
      return true;
      
    }
    return false;
   }

   isLoginedUser(){
     let user = sessionStorage.getItem("authenticatedUser");
     return !(user === null);
   }

   logOut(){
     sessionStorage.removeItem("authenticatedUser");
   }
}
