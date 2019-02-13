import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { ChoicesComponent } from './choices/choices.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { DigitalMktgComponent } from './digital-mktg/digital-mktg.component';
import { TrainingComponent } from './training/training.component';
import { HostingComponent } from './hosting/hosting.component';

import { QuotesService } from './quotes.service';
import { WebDevelopmentService } from './web-development.service';
import { DigitalMktgService } from './digital-mktg.service';
import { environment } from 'src/environments/environment';
import { UserInfoComponent } from './user-info/user-info.component';
import { SubmittedInfoComponent } from './submitted-info/submitted-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ChoicesComponent,
    WebDevComponent,
    DigitalMktgComponent,
    TrainingComponent,
    HostingComponent,
    UserInfoComponent,
    SubmittedInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule
  ],
  providers: [QuotesService , WebDevelopmentService , DigitalMktgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
