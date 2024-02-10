import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BasicauthService } from 'src/app/authentications/basicauth.service';
import { BasicbaseService } from 'src/app/bases/basicbase.service';
import { BasicconfigService } from 'src/app/configurations/basicconfig.service';

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent {
  ticketoszlopok:any
  ujticket:any={}
  tickets:any
  partners:any
  user:any=null;
  useremail:any=[]
  userstatusemail:any=[]
  category:any
  industry:any
  build:any
  area:any
  orderType:any
  dimension:any
  errorMessage:any
  error=false
  nowdate:any=new Date()
  now:any
  status:any
  statusdate:any
  constructor(private base:BasicbaseService, private config:BasicconfigService, private auth:BasicauthService){
    this.ticketoszlopok=this.config.ticket
    this.auth.getLoggedUser().subscribe(
      (u)=>{
        this.user=u
        //console.log("User: ", this.user)
        
        //console.log(this.now)
      }
    )
  
     this.status=this.config.status 
    
    this.base.getIndustry().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key,...c.payload.val()})
        )
      )
    ).subscribe({
      next:(adatok)=>{
        this.industry=adatok
        this.error=false
        //console.log(this.industry)
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
        console.log(this.errorMessage)
      } 
    })
  
    this.base.getBuild().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key,...c.payload.val()})
        )
      )
    ).subscribe({
      next:(adatok)=>{
        this.build=adatok
        this.error=false
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
        console.log(this.errorMessage)
      } 
    })
  
    this.base.getArea().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key,...c.payload.val()})
        )
      )
    ).subscribe({
      next:(adatok)=>{
        this.area=adatok
        this.error=false
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
        console.log(this.errorMessage)
      } 
    })
  
    this.base.getOrderType().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key,...c.payload.val()})
        )
      )
    ).subscribe({
      next:(adatok)=>{
        this.orderType=adatok
        this.error=false
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
        console.log(this.errorMessage)
      } 
    })
  
    this.base.getDimension().snapshotChanges().pipe(
      map(
        (changes)=>changes.map(
          (c)=>({key:c.payload.key,...c.payload.val()})
        )
      )
    ).subscribe({
      next:(adatok)=>{
        this.dimension=adatok
        this.error=false
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
        console.log(this.errorMessage)
      } 
    })
  
  
    this.base.getpartner().snapshotChanges().pipe(
      map(
        (change)=>change.map(
          (c)=>({key:c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe({
      next:(adatok)=>{
        this.error=false
        this.partners=adatok
        //console.log(this.partners)
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
      }
    }
    
    )
  }
  
  addticket(){
    this.ujticket.createDate=this.statusdate
    this.ujticket.createUser=this.userstatusemail[0]
    this.ujticket.status=""
    //this.ujticket.attachment=""
    this.base.addticket(this.ujticket)
    this.ujticket={}
  }
  
  seletStatus(event:any){
    //console.log(event.target)
    let date= new Date()
    this.userstatusemail.push(this.user.email)
    return this.statusdate=date.toLocaleDateString('sv')
  
  }
  
  createAndDate(event:any){
    let date= new Date()
    this.useremail.push(this.user.displayName)
    this.userstatusemail.push(this.user.email)
        //console.log("User: ", this.useremail)
     this.now=this.nowdate.toLocaleDateString('sv')
      return this.statusdate=date.toLocaleDateString('sv')
  }

  

  
  }
