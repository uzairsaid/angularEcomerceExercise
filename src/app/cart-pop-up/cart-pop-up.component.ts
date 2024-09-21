import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-cart-pop-up',
  standalone: true,
  imports: [],
  templateUrl: './cart-pop-up.component.html',
  styleUrl: './cart-pop-up.component.scss'
})
export class CartPopUpComponent {
  constructor(private dialogRef: MatDialogRef<CartPopUpComponent>){}

  close(){
    this.dialogRef.close();
  }

}
