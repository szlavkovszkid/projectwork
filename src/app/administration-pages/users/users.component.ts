import { Component } from '@angular/core';
import { BasicauthService } from 'src/app/authentications/basicauth.service';
import { BasicconfigService } from 'src/app/configurations/basicconfig.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users:any;
  oszlopok:any
  rendezOszlop:any
  rendezIrany:number=1
  keresendo:any
  constructor(private auth:BasicauthService, private config:BasicconfigService){
    this.auth.getUsers()?.subscribe({
      next:(users)=>this.users=users,
      error:(e)=>console.log(e)
    }
      
    )
    this.oszlopok=this.config.users
  }

  save(user:any){
    //console.log(user)
    this.auth.setCustomClaims(user.uid ,user.claims)
  }

  rendez(oszlop:any){ 
    this.rendezOszlop=oszlop
    this.rendezIrany++;
    if(this.rendezIrany==4) 
    {
      this.rendezIrany=1
      this.rendezOszlop=this.users[0]
    }
    console.log("Rendezés iránya",this.rendezIrany)
    console.log("rendezOszlop", this.rendezOszlop)
  }
}
