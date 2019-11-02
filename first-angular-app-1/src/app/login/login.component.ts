import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 username = "ravindra"
 password = ""
 errorMessage ="Invalid Credentilas"
 loginValidation = false
  constructor(private router:Router,
    private hardcodeAuthenticateService:HardcodeAuthenticationService) { }

  ngOnInit() {
  }
  handleLogin(){
    if(this.hardcodeAuthenticateService.authentication(this.username,this.password)){
      this.loginValidation = false
      this.router.navigate(["welcome",this.username])
    }
    else{
      this.loginValidation = true
    }
    //console.log(this.username);
  }
}
