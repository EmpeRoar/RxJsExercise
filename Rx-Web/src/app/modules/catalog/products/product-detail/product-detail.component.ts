import { Product } from './../../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.checkOf();
  }

  checkOf() {
    const source = of('julis', 'vlad', 'meme');
    source.subscribe(res => {
      console.log(res);
    });


    const product = {
      Id: 1,
      Name: 'Of Product',
      Price: 890
    } as Product;

    const src = of(product);
    src.subscribe(res => {
      console.log(res);
    });

  }

}
