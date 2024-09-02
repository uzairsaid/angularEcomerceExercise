
import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
    {path: "" ,component:HomeComponent},
    {path: "shoe-list" ,component:ArticleListComponent},
    {path: "cart" ,component:CartComponent},
    {path: "**" ,component:PagenotfoundComponent},    
];
