import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { PageTitleComponent } from "./page-title/page-title.component";
import { FooterComponent } from "./footer/footer.component";
import { CartComponent } from "./cart/cart.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ArticleListComponent,
    PageTitleComponent,
    FooterComponent,
    CartComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   welcomeMessage :string = "Welcome to my shoe shop";
}
