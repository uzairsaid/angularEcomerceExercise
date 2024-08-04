import { Component,EventEmitter,Inject, Input, OnInit, Output } from '@angular/core';
import { CurrencyPipe, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [NgStyle,CurrencyPipe,UpperCasePipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss',
  providers: [
    {provide: 'ARTICLE_NAME',useValue:null},
    {provide: 'IMAGE',useValue:null},
    {provide: 'PRICE',useValue:null},
    {provide: 'COUNT',useValue:null},
    {provide: 'AVAILABLE',useValue:null},

  ]
})
export class ArticleListComponent implements OnInit{
  articleName!: string;
  image!: string;
  price!: number;
  count!: number;
  isAvailable!:boolean;
  isButtonActive!:boolean;
  articleList!: ArticleListComponent [];


  constructor(@Inject('ARTICLE_NAME') articleName:string,@Inject('IMAGE') image:string,@Inject('PRICE') price:number, @Inject('COUNT') count:number) {
    this.articleName = articleName;
    this.image = image;
    this.price = price;
    this.count = count;
    this.isAvailable = true;
    this.isButtonActive = true;

  }
  ngOnCreate(): ArticleListComponent[]{
    let article = new ArticleListComponent("air jordi","../../assets/shoe_nike.jpeg",20000,3);
    let article1 = new ArticleListComponent("Nike","../../assets/images.jpeg",30000,3);
    let article2 = new ArticleListComponent("Vans","../../assets/shoe.jpeg",25000,3);

    this.articleList = [article,article1,article2];
    return this.articleList;
  }

  ngOnInit(): void {
    let articles = this.ngOnCreate()

    // for (let i = 0; i < articles.length; i++) {
    //   this.articleName = articles[i].articleName;
    //   this.image = articles[i].image;
    //   this.price = articles[i].price; 
    // }
    this.articleList = articles;

    // this.articleName = article.articleName
    // this.image = article.image
    // this.price = article.price
    // this.count = article.count

    // console.log(article+"niyi")
    // article.isButtonActive= true;
    // if(article.count === 0 ){
    //   article.isAvailable =false;
    // }
  
  }
onBuy(): void{
  console.log("niyi erga"+this.count)
  if (this.count !==0){
    this.count--;
    console.log("count: "+this.count);
  }
  else {
    this.isAvailable = false;
    this.isButtonActive = false;
  }
}
}