import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';

import * as firebase from 'firebase';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './dashboard/register/register.component';

firebase.initializeApp(environment.firebase);


// var firebaseConfig: {
//     apiKey: "AIzaSyAY5nPmtOKF97MwkpczCWbVhQEIalvn-ck",
//     authDomain: "vote--app.firebaseapp.com",
//     databaseURL: "https://vote--app.firebaseio.com",
//     projectId: "vote--app",
//     storageBucket: "vote--app.appspot.com",
//     messagingSenderId: "910612500393",
//     appId: "1:910612500393:web:0df2aabf65f0d634ec3eb8",
//     measurementId: "G-LPECG28685"
//   };


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
