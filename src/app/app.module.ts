import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';


import { MenupageComponent } from './pages/menupage/menupage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FavoritepageComponent } from './pages/favoritepage/favoritepage.component';
import { ReviewComponent } from './pages/review/review.component';
import { AddreviewComponent } from './pages/addreview/addreview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { VegComponent } from './pages/veg/veg.component';
import { NonVegComponent } from './pages/non-veg/non-veg.component';
import { DesertComponent } from './pages/desert/desert.component';
import { JuiceComponent } from './pages/juice/juice.component';
import { StarterComponent } from './pages/starter/starter.component';
import { StartingComponent } from './pages/starting/starting.component';
import { NonvegpageComponent } from './pages/nonvegpage/nonvegpage.component';
import { VegpageComponent } from './pages/vegpage/vegpage.component';
import { DesertpageComponent } from './pages/desertpage/desertpage.component';
import { JuicepageComponent } from './pages/juicepage/juicepage.component';
import { StarterpageComponent } from './pages/starterpage/starterpage.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactusComponent,
   
    NavbarComponent,
    FooterComponent,
   
    MenupageComponent,
    SignupComponent,
    FavoritepageComponent,
    ReviewComponent,
    AddreviewComponent,
    VegComponent,
    NonVegComponent,
    DesertComponent,
    JuiceComponent,
    StarterComponent,
    StartingComponent,
    NonvegpageComponent,
    VegpageComponent,
    DesertpageComponent,
    JuicepageComponent,
    StarterpageComponent,
    TermsComponent,
    PrivacyComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
