import { Injectable } from '@angular/core';
import { Shoe } from '../models/shoe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Shoe[] = [];
  private total = new BehaviorSubject<number>(this.calculateTotal());
  total$ = this.total.asObservable();
  private cartLength = new BehaviorSubject<number>(0);
  cartLength$ = this.cartLength.asObservable();

  getCart():Shoe[]{
    return this.cart;
  }


  addCart(shoe: Shoe){
    this.cart.push(shoe);
    this.updateTotal();
    this.cartLength.next(this.cart.length);
    
  }
  calculateTotal():number{
    return this.cart.reduce((sum,shoe)=>sum+shoe.price,0);
  }

  updateTotal():void{
    this.total.next(this.calculateTotal())
  }
  isEmpty(): boolean{
    if (this.cart.length === 0){
      return true;
    }
    else {
      return false
    }
  }
  
}
