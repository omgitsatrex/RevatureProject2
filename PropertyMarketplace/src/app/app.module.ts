import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './components/index/index.component';
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BuyerPageComponent } from './components/buyer-page/buyer-page.component';
import { HeaderComponent } from './components/header/header.component';
import { SeeAllListingsComponent } from './components/see-all-listings/see-all-listings.component';
import { TestComponent } from './components/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    IndexComponent,
    HomeComponent,
    SidebarComponent,
    BuyerPageComponent,
    HeaderComponent,
    SeeAllListingsComponent,
    TestComponent
   
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
