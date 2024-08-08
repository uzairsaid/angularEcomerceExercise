import { Injectable } from '@angular/core';
import { Shoe } from '../models/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Shoe[] = [];

  getCart():Shoe[]{
    return this.cart;
  }

  addCart(shoe: Shoe){
    return this.cart.push(shoe);
  }
  
}
