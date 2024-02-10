import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BasicauthService } from 'src/app/authentications/basicauth.service';
import { BasicbaseService } from 'src/app/bases/basicbase.service';
import { BasicconfigService } from 'src/app/configurations/basicconfig.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
ticketoszlopok:any
tickets:any
aktivetickets:any
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
statuskategory:any
statusdate:any
aktivKategoria="Folyamatban"
rendezOszlop:any
rendezIrany:number=1
keresendo:any
constructor(private base:BasicbaseService, private config:BasicconfigService, private auth:BasicauthService){
  this.ticketoszlopok=this.config.ticket
  this.auth.getLoggedUser().subscribe(
    (u)=>{
      this.user=u
      //console.log("User: ", this.user)
      this.useremail.push(this.user.email)
      console.log("User: ", this.useremail)
      this.now=this.nowdate.toLocaleDateString('sv')
      //console.log(this.now)
    }
  )

   this.status=this.config.status
   this.statuskategory=this.config.statuskategory 
  
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

  this.base.getticket().snapshotChanges().pipe(
    map(
      (change)=>change.map(
        (c)=>({key:c.payload.key, ...c.payload.val()})
      )
    )
  ).subscribe({
    next:(adatok)=>{
      this.error=false
      this.tickets=adatok
      this.aktivetickets=adatok.filter((adatok:any)=>adatok.status=="")
      console.log(this.tickets)
    },
    error:(e)=>{
      this.error=true
      this.errorMessage=e
    }
  }
  
  )

}

seletStatus(event:any){
  //console.log(event.target)
  let date= new Date()
  this.userstatusemail.push(this.user.email)
  return this.statusdate=date.toLocaleDateString('sv')

}

createAndDate(event:any){
  let date= new Date()
  this.useremail.push(this.user.email)
  this.userstatusemail.push(this.user.email)
      console.log("User: ", this.useremail)
   this.now=this.nowdate.toLocaleDateString('sv')
    return this.statusdate=date.toLocaleDateString('sv')
}

show(lista:any){
  this.aktivKategoria=lista.text
  if(this.aktivKategoria=="Feldolgozásra vár")this.aktivetickets=this.tickets.filter((tickets:any)=>tickets.status=="")
  else this.aktivetickets=this.tickets.filter((tickets:any)=>tickets.status==this.aktivKategoria)
  console.log(this.aktivKategoria)
  return this.aktivetickets
}

updateticket(ticket:any){
  console.log(ticket)
  ticket.statusConfiguser=this.user.displayName
  ticket.statusDate=this.statusdate
  this.base.updateticket(ticket)
}

rendez(oszlop:any){ 
  this.rendezOszlop=oszlop
  this.rendezIrany++;
  if(this.rendezIrany==4) 
  {
    this.rendezIrany=1
    this.rendezOszlop=this.ticketoszlopok[0]
  }
  console.log("Rendezés iránya",this.rendezIrany)
  console.log("rendezOszlop", this.rendezOszlop)
}
}
