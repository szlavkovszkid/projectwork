import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import {GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class BasicauthService {
  //backend elérési útvonal deploy cmd-ből lehetett kimenteni
  url="https://us-central1-sapsystem-e70ad.cloudfunctions.net/api/"
  user:any={}
  defaultClaims ={superAdmin:false, admin:false, felhasznalo:false, address:""}
  
  superAdminSubject= new BehaviorSubject<boolean>(false)
  isLoginSubject= new Subject

constructor(private afAuth:AngularFireAuth, private router:Router, private http:HttpClient){
  this.getLoggedUser().subscribe(
    (user)=>{
      if (user){
        this.user=user
        //console.log("Belépés", user)
        //if (!this.user.displayName) this.user.displayName=this.user.email
        user.getIdToken().then(
          (token)=>{
            //console.log("Belépés(token)", token)
            this.user.token=token
            this.getClaims(this.user.uid).subscribe(
              (claims)=>{
                if(claims){
                  this.user.claims=claims
                  this.superAdminSubject.next(this.user.claims.superAdmin)
                }
                else{
                  this.setCustomClaims(this.user.uid, this.defaultClaims)
                  this.user.claims=this.defaultClaims
                  this.superAdminSubject.next(false)
                }
                
              }
              
              
            )
          }
        )
      }
      else {
        this.user=null
        this.superAdminSubject.next(false)
      }
    }
  )
}

getIsSuperAdmin(){
 // if(this.user && this.user.claims) return this.user.claims.superAdmin
 // else return false
 return this.superAdminSubject
}

getClaims(uid:string){
  let headers = new HttpHeaders().set('Authorization', this.user.token)
  return this.http.get(this.url+'users/'+uid+'/claims', {headers})
}

getUsers(){
  console.log("Felhasználók(user", this.user)
 if(this.user){
    let headers = new HttpHeaders().set('Authorization', this.user.token)
    return this.http.get(this.url+'users/', {headers})
  }
  return null  
}


googleAuth(){
  //return this.afAuth.signInWithRedirect(new GoogleAuthProvider())
  return this.afAuth.signInWithPopup(new GoogleAuthProvider()).then(
    (u)=>{
      console.log("Google regisztráció",u)
    }
  )
}

singUp(email:string, password:string){
 return this.afAuth.createUserWithEmailAndPassword(email, password)
}

singIn(email:string, password:string){
  return this.afAuth.signInWithEmailAndPassword(email, password)
}

singOut(){
  return this.afAuth.signOut()
}

getLoggedUser(){
  return this.afAuth.authState
}

isLogin(){
  if(this.user) return false
  return true
}

sendVerificationEmail(){
  this.afAuth.currentUser.then(
    (user)=>user?.sendEmailVerification()
  ).then(
    ()=>this.router.navigate(['/verificationemail'])
  ).catch(
    (e)=>console.log(e)
  )
}

forgotPassword(email:string){
  return this.afAuth.sendPasswordResetEmail(email)
}

setCustomClaims(uid:any, claims:any){
  //console.log("claims user", this.user)
  //const uid="nMzIGFL8yxfEaUJo8w8V2uhh18k2"
  //const claims= {superAdmin:true, admin:false, informatikus:true}
  const body={uid, claims}

          let headers = new HttpHeaders().set('Authorization', this.user.token)

           this.http.post(this.url+'setCustomClaims',body, {headers}).subscribe({
            next:(users)=>console.log("A claims beállítása sikeres!"),
            error:(e)=>console.log("Hiba a claimsnél: ",e)
            }   
          )
        }

        setDisplayName(uid:any, displayName:any){
          const body={uid, displayName}
                  let headers = new HttpHeaders().set('Authorization', this.user.token)
                   this.http.post(this.url+'setDisplayName',body, {headers}).subscribe({
                    next:(users)=>console.log("A DisplayName beállítása sikeres!"),
                    error:(e)=>console.log("Hiba a DisplayName: ",e)
                    }   
                  )
                }
        



}