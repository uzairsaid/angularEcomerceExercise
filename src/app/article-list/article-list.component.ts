import { Component,EventEmitter,Inject, Input, OnInit, Output } from '@angular/core';
import { CurrencyPipe, NgStyle, UpperCasePipe } from '@angular/common';
import { Shoe } from '../models/shoe';

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


  ngOnCreate(): Shoe[]{
    let article = new Shoe(1,"air jordi","../../assets/shoe_nike.jpeg",20000,3);
    let article1 = new Shoe(2,"Nike","../../assets/images.jpeg",30000,3);
    let article2 = new Shoe(3,"Vans","../../assets/shoe.jpeg",25000,3);

    this.articleList = [article,article1,article2];
    return this.articleList;
  }

  ngOnInit(): void {
    let articles = this.ngOnCreate();
    this.articleList = articles;
    this.isButtonActive = true;
    this.isAvailable = true;

  }
onAddToCart(): void{
  for (let i = 0; i< this.articleList.length; i++) {
    if (this.articleList[i].count !==0){
      this.articleList[i].count--;
  
    }
    else {
      this.isAvailable = false;
      this.isButtonActive = false;
    }
      }
  
}
}