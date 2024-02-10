import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partnersort'
})
export class PartnersortPipe implements PipeTransform {

  transform(adatok:any,oszlop:any,irany:any){
    if(!adatok) return null
    if(!oszlop) return adatok

    return adatok.sort(
        (a:any, b:any)=>{
          if (oszlop.type=="text"){
            let vissza= a[oszlop.key].localeCompare(b[oszlop.key],/* 'hu', */{ sensitivity: 'base'})
            //accent
            if (irany==3)vissza=vissza*-1
            return vissza;
          }
          else{
            let vissza
            if (a[oszlop.key]>b[oszlop.key])  vissza=1
            else if (a[oszlop.key]<b[oszlop.key]) vissza=-1
            else vissza=0
            if(irany==3) vissza=vissza*-1
            return vissza
          } 
        }
    )
  }
}
