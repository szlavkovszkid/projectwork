import { Component } from '@angular/core';
import { BasicauthService } from 'src/app/authentications/basicauth.service';

@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.component.html',
  styleUrls: ['./verification-email.component.css']
})
export class VerificationEmailComponent {
  email:any;
  
  constructor(private auth:BasicauthService){
  
    this.auth.getLoggedUser().subscribe(
      (u)=>this.email=u?.email
    )
  }
  
  SendVerificationEmail(){
    this.auth.sendVerificationEmail()
  }
  }