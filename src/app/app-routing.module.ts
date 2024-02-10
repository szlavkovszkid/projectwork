import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DimensionsComponent } from './administration-pages/dimensions/dimensions.component';
import { UsersComponent } from './administration-pages/users/users.component';
import { ForgottenPasswordComponent } from './connection/forgotten-password/forgotten-password.component';
import { LoginComponent } from './connection/login/login.component';
import { RegistrationComponent } from './connection/registration/registration.component';
import { VerificationEmailComponent } from './connection/verification-email/verification-email.component';
import { InstructionsComponent } from './user-pages/instructions/instructions.component';
import { StatementsComponent } from './user-pages/statements/statements.component';
import { TicketsComponent } from './user-pages/tickets/tickets.component';
import { PartnerListComponent } from './administration-pages/partner-list/partner-list.component';
import { NewTicketComponent } from './user-pages/new-ticket/new-ticket.component';
import { ProfileComponent } from './user-pages/profile/profile.component';

const routes: Routes = [
  {path:"partners", component:PartnerListComponent},
  {path:"dimensions", component:DimensionsComponent},
  {path:"users", component:UsersComponent},
  {path:"forgottenpassword", component:ForgottenPasswordComponent},
  {path:"login", component:LoginComponent},
  {path:"registration", component:RegistrationComponent},
  {path:"verificationemail", component:VerificationEmailComponent},
  {path:"instructions", component:InstructionsComponent},
  {path:"statements", component:StatementsComponent},
  {path:"tickets", component:TicketsComponent},
  {path:"newticket", component:NewTicketComponent},
  {path:"profile", component:ProfileComponent},
  {path:"", component:LoginComponent},
  {path:"**", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
    
}
