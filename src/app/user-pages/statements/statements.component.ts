import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BasicauthService } from 'src/app/authentications/basicauth.service';
import { BasicbaseService } from 'src/app/bases/basicbase.service';
import { BasicconfigService } from 'src/app/configurations/basicconfig.service';
import {Chart} from 'chart.js/auto';


@Component({
  selector: 'app-statements',
  templateUrl: './statements.component.html',
  styleUrls: ['./statements.component.css']
})
export class StatementsComponent {ticketoszlopok:any
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
  chart:any
  darab:any
  adathalmaz:any={}
  createUser:any=[]
  createUserdb:any=[]
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
        /* this.aktivetickets=adatok.filter((adatok:any)=>adatok.status=="") */
        /* console.log(this.tickets) */
        
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
      }
    }
    
    )

  }
  

  createChart(createUser:any,createUserdb:any){
  
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels:  this.createUser, 
	       datasets: [
          {
            label: "Sales",
            data: this.createUserdb,
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: [],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  ngOnInit(): void {
    
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
        /* this.aktivetickets=adatok.filter((adatok:any)=>adatok.status=="") */
       /*  console.log(this.tickets) */
        if (this.tickets != null) {
          for (let i = 0; i < this.tickets.length; i++) {
            if(this.createUser!=this.tickets[i].createUser){
              this.createUser.push(this.tickets[i].createUser);
              this.createUserdb.push(1);
            console.log("adathalmaz",this.adathalmaz)
            }
            else{
            }
            
          }
        }
        this.createChart(this.createUser,this.createUserdb);
      },
      error:(e)=>{
        this.error=true
        this.errorMessage=e
      }
    }
    
    )
   
   
  }
  
}
  