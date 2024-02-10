import { Component } from '@angular/core';
import { BasicauthService } from 'src/app/authentications/basicauth.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent {
  email:any;
  
  constructor(private auth:BasicauthService){
  
    this.auth.getLoggedUser().subscribe(
      (u)=>this.email=u?.email
    )
  }
  
  forgotPassword(){
    this.auth.forgotPassword(this.email)
  }
  }