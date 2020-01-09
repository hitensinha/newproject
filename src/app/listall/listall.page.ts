import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../mainservice.service';
@Component({
  selector: 'app-listall',
  templateUrl: './listall.page.html',
  styleUrls: ['./listall.page.scss'],
})
export class ListallPage implements OnInit {
  fullData:any = [{}];
  constructor(private service:MainserviceService) { 
    this.fullData= JSON.parse(localStorage.getItem('cart'));
    console.log(this.fullData);
    // this.fullData=this.service.cardData;
    // console.log(this.service.cardData);
  }

  ngOnInit() {
    // this.cartData= localStorage.getItem('cart');
  
  }

}
