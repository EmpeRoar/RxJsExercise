import { CategoriesService } from './../../../../services/categories.service';
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

  constructor(private productSvc: ProductsService,
              private categorySvc: CategoriesService) { }

  ngOnInit(): void {
    this.productSvc.getList().subscribe(x => {
      // this.products = x;
    });


    this.productSvc.getListMergeMapperAll().subscribe(x => {
      this.products.push(...x);
    });

    this.productSvc.getListWithCategories().subscribe(x => {
      //this.products.push(...x);
    });

    this.categorySvc.getListCategoriesAndProducts().subscribe(x => {
      console.log(`categories`);
      console.log(x);
    });

    this.productSvc.getProductsByCategory(1).subscribe(x => {
      console.log(`products by category`);
      console.log(x);
    });

  }

}
