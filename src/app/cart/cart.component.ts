import { Component, OnInit } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Shoe } from '../models/shoe';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  
})
export class CartComponent implements OnInit{
  cart:Shoe[]  = [];
  total:number =0;
  constructor(private cartService: CartService){
  }
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartService.total$.subscribe(value=>{
      this.total = value;
    })
  }
  
}
