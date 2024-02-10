import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicauthService } from 'src/app/authentications/basicauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {  
email:string=""
password:string=""
user:any=null;
constructor(private auth:BasicauthService, private router:Router){
  this.auth.getLoggedUser().subscribe(
    (u)=>{
      this.user=u
      if(this.user) this.router.navigate(['/tickets'])
      //console.log("User: ", this.user)
    }
  )


}

googleAuth(){
  this.auth.googleAuth().then(
    //()=>console.log("Sikeres Google regisztráció!")
    ()=>this.router.navigate(['/statements'])
  ).catch(
    (e)=>console.log(e)
  )
}
signIn(){
  this.auth.singIn(this.email, this.password).then(
    (e)=>console.log(e)/* this.router.navigate(['/statements']) */
  ).catch(
    (e)=>console.log(e)
  )
  }
validUser(){
  return false;
}

}
