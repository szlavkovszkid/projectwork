import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BasicauthService } from 'src/app/authentications/basicauth.service';
import { BasicbaseService } from 'src/app/bases/basicbase.service';
import { BasicconfigService } from 'src/app/configurations/basicconfig.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {  
  users:any;
  userloggin:any
  profile:any
  accountable:any
  error:any=false
  errorMessage:any=""
  constructor(private auth:BasicauthService,private base:BasicbaseService){
    this.auth.getLoggedUser().subscribe(
      (u)=>{
        this.profile=u
        //console.log("User: ", this.user)
        
        //console.log(this.now)
      }
    )


    this.auth.getUsers()?.subscribe({
      next:(users)=>{
        this.users=users
        this.userloggin=this.users.filter((users:any)=>users.email==this.profile.email)
        console.log("felhasználó",this.userloggin)
      },
      error:(e)=>console.log(e)
    }
      
    )
    
    this.base.getaccountable().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key,...c.payload.val()})
        )
      )
    ).subscribe({
      next:(adatok)=>{
        this.accountable=adatok
        this.error=false
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
        console.log(this.errorMessage)
      } 
    })


  }

  save(user:any){
    //console.log(user)
    this.auth.setCustomClaims(user.uid ,user.claims)
  }
  saveDisplayname(user:any){
    //console.log(user)
    this.auth.setDisplayName(user.uid ,user.displayName)
  }
}