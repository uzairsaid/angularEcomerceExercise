
import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    {path: "" ,component:HomeComponent},
    {path: "signup" ,component:SignupComponent},
    {path: "shoe-list" ,component:ArticleListComponent},
    {path: "cart" ,component:CartComponent},
    {path: "**" ,component:PagenotfoundComponent},  
      
];
