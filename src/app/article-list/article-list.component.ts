import { Component,EventEmitter,Inject, Input, OnInit, Output } from '@angular/core';
import { CurrencyPipe, NgStyle, UpperCasePipe } from '@angular/common';
import { Shoe } from '../models/shoe';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [NgStyle,CurrencyPipe,UpperCasePipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
  
})
export class ArticleListComponent implements OnInit{
  
  isAvailable!:boolean;
  isButtonActive!:boolean;
  articleList!: Shoe [];

  constructor(private cartService:CartService){

  }


  OnCreate(): Shoe[]{
    let article = new Shoe(1,"air jordi","../../assets/shoe_nike.jpeg",20000,3);
    let article1 = new Shoe(2,"Nike","../../assets/images.jpeg",30000,3);
    let article2 = new Shoe(3,"Vans","../../assets/shoe.jpeg",25000,3);
    let article3 = new Shoe(4,"Marathon","../../assets/shoe_big.jpeg",45000,3);
    let article4 = new Shoe(5,"Sport shoe","../../assets/shoe_green.jpeg",35000,3);


    this.articleList = [article,article1,article2,article3,article4];
    return this.articleList;
  }

  ngOnInit(): void {
    let articles = this.OnCreate();
    this.articleList = articles;
    this.isButtonActive = true;
    this.isAvailable = true;

  }
onAddToCart(shoe: Shoe): void{

  this.cartService.addCart(shoe); 
}
}
