import { Injectable } from '@angular/core';
import { Shoe } from '../models/shoe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Shoe[] = [];
  private total = new BehaviorSubject<number>(this.calculateTotal());
  total$ = this.total.asObservable()

  getCart():Shoe[]{
    return this.cart;
  }


  addCart(shoe: Shoe){
    this.cart.push(shoe);
    this.updateTotal();
  }
  calculateTotal():number{
    return this.cart.reduce((sum,shoe)=>sum+shoe.price,0);
  }

  updateTotal():void{
    this.total.next(this.calculateTotal())
  }
  
}
