import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Environments } from 'src/Environments';
import { RegistrationComponent } from './connection/registration/registration.component';
import { LoginComponent } from './connection/login/login.component';
import { UsersComponent } from './administration-pages/users/users.component';
import { VerificationEmailComponent } from './connection/verification-email/verification-email.component';
import { ForgottenPasswordComponent } from './connection/forgotten-password/forgotten-password.component';
import { StatementsComponent } from './user-pages/statements/statements.component';
import { TicketsComponent } from './user-pages/tickets/tickets.component';
import { InstructionsComponent } from './user-pages/instructions/instructions.component';
import { MainnavigationComponent } from './navigations/mainnavigation/mainnavigation.component';
import { DimensionsComponent } from './administration-pages/dimensions/dimensions.component';
import { PartnerListComponent } from './administration-pages/partner-list/partner-list.component';
import { NewTicketComponent } from './user-pages/new-ticket/new-ticket.component';
import { ProfileComponent } from './user-pages/profile/profile.component';
import { PartnersortPipe } from './filters/partnersort.pipe';
import { PartnerfilterPipe } from './filters/partnerfilter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    UsersComponent,
    VerificationEmailComponent,
    ForgottenPasswordComponent,
    StatementsComponent,
    TicketsComponent,
    InstructionsComponent,
    MainnavigationComponent,
    DimensionsComponent,
    PartnerListComponent,
    NewTicketComponent,
    ProfileComponent,
    PartnersortPipe,
    PartnerfilterPipe,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(Environments.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
