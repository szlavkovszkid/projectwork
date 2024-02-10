import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'partnerfilter'
})
export class PartnerfilterPipe implements PipeTransform {

  transform(partner:any, keresendo:any) {
    if(!partner) return null;
    if(!keresendo || keresendo.lenght==0) return partner

    //így csak egy adott mezőben lehet keresni
    // return allatok.filter(
    //   (a:any)=>a.nev.toLowerCase().includes(keresendo.toLowerCase())
    // )

    //ha az egész sorban akarok keresni, objektumból szöveget csinál, ilyenkor a mező neveket is beleteszi ami mondjuk sokszor hátrány
    return partner.filter(
      (a:any)=>JSON.stringify(a).toLowerCase().includes(keresendo.toLowerCase())
    )
  }

}
