import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './landing-page/sign-up/sign-up.component';
import { LoginComponent } from './landing-page/login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventsComponent } from './dashboard/events/events.component';
import { BaseFitnessComponent } from './dashboard/base-fitness/base-fitness.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './landing-page/about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from "@angular/material" 
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { SignupService } from "./services/sign-up.service"
import { DashGuard } from "./guards/dash.guards"


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    DashboardComponent,
    EventsComponent,
    BaseFitnessComponent,
    PageNotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SignupService, DashGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
