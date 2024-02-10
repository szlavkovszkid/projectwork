import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicauthService } from 'src/app/authentications/basicauth.service';
import { BasicbaseService } from 'src/app/bases/basicbase.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  email:string=""
  password:string=""
  password2:string=""

  constructor(private auth:BasicauthService, private base:BasicbaseService, private router:Router){}

  googleAuth(){
    this.auth.googleAuth().then(
      ()=>{
        console.log("Sikeres Google regisztráció!")
        this.router.navigate(['/statements'])
      }
    ).catch(
      (e)=>console.log(e)
    )
  }
  // addMessage(){
  //   this.base.addMessage("")
  // }

  singUp(){
    this.auth.singUp(this.email, this.password).then(
      //()=>console.log("Sikeres regisztráció!")
      //()=>this.router.navigate(['/singin'])
      ()=>this.auth.sendVerificationEmail()
      ).catch(
        (e)=>console.log(e)
      )
    
  }
  validUser(){
    return false;
  }
  }