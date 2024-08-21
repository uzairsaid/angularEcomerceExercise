
import { Routes } from '@angular/router';
import { PageTitleComponent } from './page-title/page-title.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
    {path: "" ,component:PageTitleComponent},
    {path: "shoe-list" ,component:ArticleListComponent},
    {path: "**" ,component:PagenotfoundComponent},    
];
