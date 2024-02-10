import { Component } from '@angular/core';
import { map } from 'rxjs';
import { BasicbaseService } from 'src/app/bases/basicbase.service';
import { BasicconfigService } from 'src/app/configurations/basicconfig.service';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent {
partneroszlop:any
errorMessage:any
error=false
partners:any
newpartner:any={}
rendezOszlop:any
rendezIrany:number=1
keresendo:any

constructor(private base:BasicbaseService, private config:BasicconfigService){
this.partneroszlop=this.config.partner

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
  },
  error:(e)=>{
    this.error=true
    this.errorMessage=e
  }
}

)

} 
 
addPartner(){
  this.base.addpartner(this.newpartner)
  this.newpartner={}
}

updatePartner(partner:any){
  this.base.updatepartner(partner)
}

deletePartner(partner:any){
  this.base.deletepartner(partner)
}

rendez(oszlop:any){ 
  this.rendezOszlop=oszlop
  this.rendezIrany++;
  if(this.rendezIrany==4) 
  {
    this.rendezIrany=1
    this.rendezOszlop=this.partneroszlop[0]
  }
  console.log("Rendezés iránya",this.rendezIrany)
  console.log("rendezOszlop", this.rendezOszlop)
}
}
