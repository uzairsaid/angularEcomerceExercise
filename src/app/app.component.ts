import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { ArticleListComponent } from './article-list/article-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    ArticleListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
