import { Component, OnInit} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  homeLink!: string;
  contactLink!: string;
  productsLink!: string;
  cartImage!: string;


  
  ngOnInit(): void{
    this.homeLink = "Home";
    this.contactLink = "Contact"
    this.productsLink = "Products"
    this.cartImage = "../../assets/cart.png"

  }

}
