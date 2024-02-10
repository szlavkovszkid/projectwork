import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicconfigService {
  users= [
    {key:"displayName", text:"Teljes Név", type:"text"},
    {key:"email", text:"E-mail", type:"text"},
    {key:"permission", text:"Jogosultság", type:"text"},
  ]



  userProfil= [
    {key:"displayName", text:"Teljes Név", type:"text"},
    {key:"email", text:"E-mail", type:"text"},
    {key:"build", text:"Épületek", type:"text"},
    {key:"permission", text:"Jogosultság", type:"text"},
  ]

  statuskategory= [
    {key:"waiting to be processed", text:"Feldolgozásra vár", type:"text"},
    {key:"inprogress", text:"Folyamatban", type:"text"},
    {key:"closed", text:"Lezárt", type:"text"},
    {key:"rejected", text:"Elutasított", type:"text"},
  ] 

  status= [
    {key:"inprogress", text:"Folyamatban", type:"text"},
    {key:"closed", text:"Lezárt", type:"text"},
    {key:"rejected", text:"Elutasított", type:"text"},
  ]

partner= [
    {key:"partner", text:"Partner", type:"text"},
    {key:"taxnumber", text:"Adószám", type:"text"},
    {key:"email", text:"E-mail", type:"email"},
    {key:"address", text:"Cím", type:"address"}
  ]


dimension= [
  {key:"dimensionCode", text:"Dimenzió kódja", type:"plain"},
  {key:"dimensionName", text:"Dimenzió", type:"plain"}
]

dimensioncategory= [
  {key:"industry", text:"Üzletág", type:"text"},
  {key:"build", text:"Épület", type:"text"},
  {key:"area", text:"Terület", type:"text"},
  {key:"orderType", text:"Típus", type:"text"},
  {key:"accountable", text:"Felhasználó", type:"text"}
]



ticket=[
  {key:"partner", text:"Partner", type:"select"},
  {key:"industry", text:"Üzletág", type:"select"},
  {key:"build", text:"Épület", type:"select"},
  {key:"area", text:"Terület", type:"select"},
  {key:"orderType", text:"Típus", type:"select"},
  {key:"netto", text:"Nettó", type:"number"},
  {key:"brutto", text:"Bruttó", type:"number"},
  {key:"subjectField", text:"Leírás", type:"textarea"},
  {key:"attachment", text:"csatolmány", type:"file"},
  {key:"createUser", text:"Létrehozó", type:"text"},
  {key:"createDate", text:"Létrehozás Dátuma", type:"date"},
  {key:"status", text:"Státusz", type:"text"},
  {key:"statusDate", text:"Státusz Dátum", type:"date"},
  {key:"statusConfiguser", text:"Státusz Beállító", type:"text"},
]
}
