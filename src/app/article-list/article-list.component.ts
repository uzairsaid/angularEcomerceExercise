import { Component,Inject, OnInit } from '@angular/core';
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

  constructor(@Inject('ARTICLE_NAME') articleName:string,@Inject('IMAGE') image:string,@Inject('PRICE') price:number, @Inject('COUNT') count:number) {
    this.articleName = articleName;
    this.image = image;
    this.price = price;
    this.count = count;
    this.isAvailable = true

  }
  ngOnCreate(): ArticleListComponent{
    let article = new ArticleListComponent("air jordi","../../assets/shoe_nike.jpeg",20000,3);
    return article;
  }

  ngOnInit(): void {
    let article = this.ngOnCreate()
    console.log(article.price)
    this.articleName = article.articleName
    this.image = article.image
    this.price = article.price
    this.count = article.count

    console.log(article+ "niyi")
    article.isButtonActive= true;
    if(article.count === 0 ){
      article.isAvailable =false;
    }
  }
onBuy(): void{
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
