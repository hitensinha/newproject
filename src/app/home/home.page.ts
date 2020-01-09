import { Component } from '@angular/core';
import {  NavigationExtras } from "@angular/router";
import {MainserviceService} from '../mainservice.service';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  vegitables : Object[] = [];
  itemsInCart: Object[] = [];
  constructor(public navCtrl: NavController,private service:MainserviceService) {
    // this.items = [
    //   { 'name': 'Hello World', quantityInCart: 0 , id: 1},
    //   { 'name': 'Hello1 World', quantityInCart: 0 , id: 2},
    //   { 'name': 'Hello2 World', quantityInCart: 0 , id: 3},
    //   { 'name': 'Hello3 World', quantityInCart: 0 , id: 4}
    //   ];
     this.vegitables =[
        {
          image:"/assets/images/img7.jpg",
          text:"Tomato",
          quantityInCart: 0,
           id: 1
        },
        {
          image:"/assets/images/img8.jpg",
          text:"Tomato",
          quantityInCart: 0,
          id: 2
        },
        {
          image:"/assets/images/img9.jpg",
          text:"Tomato",
          quantityInCart: 0,
           id: 3
        },
        {
          image:"/assets/images/img10.jpg",
          text:"Tomato",
          quantityInCart: 0,
           id: 4
        }
        
      ]
  }
  addToCart(item) {
    item.quantityInCart += 1;
    this.itemsInCart.push(item); 
    console.log(this.itemsInCart);
    this.service.cardData=item;
    console.log(this.service.cardData);
    localStorage.setItem('cart', JSON.stringify(this.itemsInCart));
    }
    // goToList() {
    //   this.navCtrl.push(ListPage);
    //   }
  images = [
    {
      image: "/assets/images/img1.jpg",
 
    },
    {
      image: "/assets/images/img2.jpg",
    
    },
    {
      image: "/assets/images/img3.jpg",
     
    },
    {

      image: "/assets/images/img4.jpg",
   
    },
    {

      image: "/assets/images/img5.jpg",
  
    }
  ];
  
  // Detailspage(){
  //   this.navCtrl.navigateForward(['details']);
  // }
}
