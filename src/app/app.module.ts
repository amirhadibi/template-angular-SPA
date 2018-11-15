import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, Route, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { PTMComponent } from './ptm-component/ptm.component';
import { NavbarComponent } from './navbar-component/navbar.component';


import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent },

  {path: 'home', component: HomeComponent},

  //{path: 'documents', component: PanelDocumentListComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PTMComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot(ROUTES), 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
