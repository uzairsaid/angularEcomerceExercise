import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  homeLink!: string;
  aboutLink!: string;
  contactLink!: string;
  
  ngOnInit(): void{
    this.homeLink = "Home";
    this.aboutLink = "About Us";
    this.contactLink = "Contact"
  }

}
