import { ProductsService } from './../../../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productSvc: ProductsService) { }

  ngOnInit(): void {
    this.productSvc.getList().subscribe(x => {
      this.products = x;
    });
  }

}
