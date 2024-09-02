import { Component, OnInit,Input} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../Services/cart.service';
import { Shoe } from '../models/shoe';

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
  cartLength: number = 0;
  cartEmpty!: boolean; 

  constructor(private cartService: CartService){}

  
  ngOnInit(): void{
    this.homeLink = "Home";
    this.contactLink = "Contact";
    this.productsLink = "Products";
    this.cartImage = "../../assets/cart.png";
    // to increment number of items in cart
    this.cartService.cartLength$.subscribe(value=>{
      this.cartLength = value;
    }
    );

  }

}