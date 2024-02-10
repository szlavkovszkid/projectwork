import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BasicauthService } from 'src/app/authentications/basicauth.service';

@Component({
  selector: 'app-mainnavigation',
  templateUrl: './mainnavigation.component.html',
  styleUrls: ['./mainnavigation.component.css']
})
export class MainnavigationComponent {
  user:any=null;
  isSuperAdmin = false;

  constructor(private auth:BasicauthService, private router:Router){
    this.getIsSuperAdmin()
    this.auth.getLoggedUser().subscribe(
      (u)=>{
        this.user=u
        //console.log("User: ", this.user)
      }
    )
  }

  getIsSuperAdmin(){
     this.auth.getIsSuperAdmin().subscribe(
      (sadmin)=>this.isSuperAdmin=sadmin
     )
  }

  singout(){
    this.auth.singOut().then(
      ()=>this.router.navigate(['/chat'])

    )
  }

}