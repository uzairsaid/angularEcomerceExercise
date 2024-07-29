import { Component,OnInit } from '@angular/core';
import { CurrencyPipe, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true,
  imports: [NgStyle,CurrencyPipe,UpperCasePipe],
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.scss'
})
export class ArticleListComponent  implements OnInit{
  articleName!: string;
  image!: string;
  price!: number;
  count!: number;
  isAvailable!:boolean;
  isButtonActive!:boolean;

  ngOnInit(): void {
    this.articleName = "air jordan";
    this.image = "../../assets/shoe_nike.jpeg";
    this.price = 50000;
    this.count = 5;
    this.isAvailable = true;
    this.isButtonActive= true;
    if(this.count === 0 ){
      this.isAvailable =false;
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
