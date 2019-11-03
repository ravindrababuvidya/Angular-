import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FbauthservicesService {

  constructor(private fbauth:AngularFireAuth) {
    
   }

   signUpFirebaseService  (useremail:string,password:string){
     console.log("Method Executing "+useremail+"\t "+password);
     
      console.log(this.fbauth.auth.createUserWithEmailAndPassword(
        useremail,password));
   }
}
