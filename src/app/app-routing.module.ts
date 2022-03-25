import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FavoritepageComponent } from './pages/favoritepage/favoritepage.component';
import { ReviewComponent } from './pages/review/review.component';
import { AddreviewComponent } from './pages/addreview/addreview.component';
import { NonVegComponent } from './pages/non-veg/non-veg.component';
import { VegComponent } from './pages/veg/veg.component';
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


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'signup',component:SignupComponent},
  {path:'favoritepage/:id',component:FavoritepageComponent},
  {path:'review/:id',component:ReviewComponent},
  {path:'addreview',component:AddreviewComponent},
  {path:'nonveg',component:NonVegComponent},
  {path:'veg',component:VegComponent},
  {path:'desert',component:DesertComponent},
  {path:'juice',component:JuiceComponent},
  {path:'starter',component:StarterComponent},
  {path:'starting',component:StartingComponent},
  {path:'nonveg/:id',component:NonvegpageComponent},
  {path:'veg/:id',component:VegpageComponent},
  {path:'desert:/id',component:DesertpageComponent},
  {path:'juice:/id',component:JuicepageComponent},
  {path:'starter:/id',component:StarterpageComponent},
  {path:'term',component:TermsComponent},
  {path:'privacy',component:PrivacyComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
