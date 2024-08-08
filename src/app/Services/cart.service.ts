import { Injectable } from '@angular/core';
import { Shoe } from '../models/shoe';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Shoe[] = [];
  private total: number =0;

  getCart():Shoe[]{
    return this.cart;
  }
  getTotal():number{
    return this.total;
  }

  addCart(shoe: Shoe){
    this.cart.push(shoe);
    this.updateTotal();
  }
  updateTotal():void{
    this.total = this.cart.reduce((sum,shoe)=>sum+shoe.price,0);

  }
  
}
