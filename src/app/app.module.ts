import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { ContainerComponent } from './container-component/container.component';
import { Page1Component } from './page1-component/page1.component';
import { Page2Component } from './page2-component/page2.component';
import { Page1ContainerComponent } from './page1-component/page1Container.component';
import { Page2ContainerComponent } from './page2-component/page2Container.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import {AgGridModule} from 'ag-grid-angular';


import { AppComponent } from './app.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent },
  {path: 'home', component: HomeComponent},
  {path: 'page1', component: Page1ContainerComponent},
  {path: 'page2', component: Page2ContainerComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    ContainerComponent,
    Page1ContainerComponent,
    Page2ContainerComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES), 
    AgGridModule.withComponents([AppComponent]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
