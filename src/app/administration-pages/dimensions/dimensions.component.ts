import { style } from '@angular/animations';
import { Component, EventEmitter, Output } from '@angular/core';
import { map } from 'rxjs';
import { BasicbaseService } from 'src/app/bases/basicbase.service';
import { BasicconfigService } from 'src/app/configurations/basicconfig.service';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.css']
})
export class DimensionsComponent {
  oszlopok:any
  category:any
  industry:any
  newindustry:any={}
  build:any
  newbuild:any={}
  area:any
  newarea:any={}
  orderType:any
  neworderType:any={}
  accountable:any
  newaccountable:any={}
  dimension:any
  aktivKategoria=0
  errorMessage:any
  error=false
  rendezOszlop:any
  rendezIrany:number=1
  keresendo:any

  // kategoriaValtas:EventEmitter<any>= new EventEmitter()
  constructor(private base:BasicbaseService, private config:BasicconfigService){
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
    //console.log(this.dimension)
    
    this.oszlopok=this.config.dimension
    this.category=this.config.dimensioncategory
  }

 
  
addIndustry(){
  this.newindustry.dimensionCode=Number(this.newindustry.dimensionCode)
  this.base.addIndustry(this.newindustry)
  this.newindustry={}
}

addBuild(){
  this.newbuild.dimensionCode=Number(this.newbuild.dimensionCode)
  this.base.addBuild(this.newbuild)
  this.newbuild={}
}
addArea(){
  this.newarea.dimensionCode=Number(this.newarea.dimensionCode)
  this.base.addArea(this.newarea)
  this.newarea={}
}
addOrderType(){
  this.neworderType.dimensionCode=Number(this.neworderType.dimensionCode)
  this.base.addOrderType(this.neworderType)
  this.neworderType={}
}

addaccountable(){
  this.newaccountable.dimensionCode=Number(this.newaccountable.dimensionCode)
  this.base.addaccountable(this.newaccountable)
  this.newaccountable={}
}

updateIndustry(industry:any){      
  this.base.updateIndustry(industry)
 }

updateBuild(build:any){      
  this.base.updateBuild(build)
 }

updateArea(area:any){      
  this.base.updateArea(area)
 }
updateOrderType(orderType:any){      
  this.base.updateOrderType(orderType)
 }

 updateaccountable(accountable:any){      
  this.base.updateaccountable(accountable)
 }


 deleteIndustry(industry:any){      
  this.base.deleteIndustry(industry)   
 }

 deleteBuild(build:any){      
  this.base.deleteBuild(build)   
 }

 deleteArea(area:any){      
  this.base.deleteArea(area)   
 }

 deleteOrderType(orderType:any){      
  this.base.deleteOrderType(orderType)   
 }

 deleteaccountable(accountable:any){      
  this.base.deleteaccountable(accountable)   
 }



show(i:any){
  this.aktivKategoria=i
}

rendez(oszlop:any){ 
  this.rendezOszlop=oszlop
  this.rendezIrany++;
  if(this.rendezIrany==4) 
  {
    this.rendezIrany=1
    this.rendezOszlop=this.oszlopok[0]
  }
  console.log("Rendezés iránya",this.rendezIrany)
  console.log("rendezOszlop", this.rendezOszlop)
}
}
