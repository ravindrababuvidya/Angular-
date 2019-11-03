import { Component, OnInit } from '@angular/core';
import { FbauthservicesService } from '../service/fbauthservices.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html', 
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usermail :string ="" ;
  password : string="";
  

  constructor(private fbauthenticateServices:FbauthservicesService) {

   }

  ngOnInit() {
  }

  signUpFireBase(){
    if(this.usermail !== null && this.password !== null){
     //this.fireauth.auth.createUserWithEmailAndPassword(this.usermail,this.password);
      //console.log(this.fireauth.auth.createUserWithEmailAndPassword(this.usermail,this.password));
      this.fbauthenticateServices.signUpFirebaseService(this.usermail,this.password);
    }

  }

}

