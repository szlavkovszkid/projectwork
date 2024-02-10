import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Ticket } from '../models/ticket';
import { Dimension } from '../models/dimension';
import { Partners } from '../models/partners';
import { UserStatements } from '../models/user-statements';

@Injectable({
  providedIn: 'root'
})
export class BasicbaseService {

tickets:AngularFireList<Ticket> //ezze adatam meg a model formátumot a message adatmodelt
partners:AngularFireList<Partners>
industry:AngularFireList<Dimension>
build:AngularFireList<Dimension>
area:AngularFireList<Dimension>
orderType:AngularFireList<Dimension>
dimension:AngularFireList<Dimension>
accountable:AngularFireList<Dimension>
constructor(private db:AngularFireDatabase) {
  //így tudok új csomópontot létrehozni az adatbázisban, hogy elkülőnítve küldje fel a másik listába az adatot
  this.tickets = this.db.list('tickets')
  this.partners = this.db.list('partners')
  this.industry = this.db.list('dimension/industry')
  this.build = this.db.list('dimension/build')
  this.area = this.db.list('dimension/area')
  this.orderType = this.db.list('dimension/orderType')
  this.dimension = this.db.list('dimension')
  this.accountable = this.db.list('dimension/accountable')
  //console.log(this.dimension)
 }

 // Így tudom azt belerakni az adatbázisba pushal az új csomópontba
 addIndustry(newindustry:any){      
  // newindustry={}
  // newindustry.dimensionCode=2525
  // newindustry.dimensionName="Bécsi Corner Irodaház"
  return this.industry.push(newindustry)   
 }

 addBuild(newbuild:any){      
  return this.build.push(newbuild)   
 }

 addArea(newarea:any){      
  return this.area.push(newarea)   
 }

 addOrderType(neworderType:any){      
  return this.orderType.push(neworderType)   
 }

 addticket(newticket:any){      
  return this.tickets.push(newticket)   
 } 

 addpartner(newpartner:any){      
  return this.partners.push(newpartner)   
 } 

 addaccountable(newaccountable:any){      
  return this.accountable.push(newaccountable)   
 } 



 deleteIndustry(industry:any){      
  return this.industry.remove(industry.key)   
 }

 deleteBuild(build:any){      
  return this.build.remove(build.key)   
 }

 deleteArea(area:any){      
  return this.area.remove(area.key)   
 }

 deleteOrderType(orderType:any){      
  return this.orderType.remove(orderType.key)   
 }

 deleteticket(ticket:any){      
  return this.tickets.remove(ticket.key)   
 }
 deletepartner(partner:any){      
  return this.partners.remove(partner.key)   
 }
 deleteaccountable(accountable:any){      
  return this.accountable.remove(accountable.key)   
 }





 updateIndustry(industry:any){      
  return this.industry.update(industry.key,industry)   
 }

 updateBuild(build:any){      
  return this.build.update(build.key, build)   
 }

 updateArea(area:any){      
  return this.area.update(area.key,area)   
 }

 updateOrderType(orderType:any){      
  return this.orderType.update(orderType.key,orderType)   
 }

 updateticket(ticket:any){      
  return this.tickets.update(ticket.key,ticket)   
 }

 updatepartner(partner:any){      
  return this.partners.update(partner.key,partner)   
 }

 updateaccountable(accountable:any){      
  return this.accountable.update(accountable.key,accountable)   
 }




 getIndustry(){
  return this.industry
 }

 getBuild(){
  return this.build
 }

 getArea(){
  return this.area
 }

 getOrderType(){
  return this.orderType
 }

 getDimension(){
  return this.dimension
 }

 getticket(){
  return this.tickets
 }
 getpartner(){
  return this.partners
 }

 getaccountable(){
  return this.accountable
 }

}
