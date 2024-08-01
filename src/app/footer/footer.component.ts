import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit{
  about!:string;
  email!:string;
  facebook!:string;
  x!:string;
  place!:string
  phone!:string



  ngOnInit(): void {
    this.about = "Shoe shop is a shop with different kind of shoes,ahakjeuajdkaliephusaoiajoisjowogsnaoewjowjaoij"+
    "wuhwoeweoiweiopwfanoewjfuonawfoisdjkfnaskjnfuwenfajkne";
    this.email = "shoeshop@gmail.com";
    this.facebook = "Shoe shop";
    this.x = "@shoeshop";
    this.place = "Bujumbura, Gihosha, Gisandema, No 58"
    this.phone = "+257 6784903";

  }
  
}
