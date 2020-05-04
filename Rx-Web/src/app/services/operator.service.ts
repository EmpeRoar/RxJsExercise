import { Category } from './../model/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  constructor(private http: HttpClient) { }

  mapper = (res: any) => {
    let products = res.products.map(p => {
      const f = {
        Id: p.Id,
        Name: p.Name
      } as Product;
      return f;
    });
    let categories = res.categories.map(c => {
      const f = {
        Id: c.Id,
        Name: c.Name
      } as Category;
      return f;
    });
    return {
      products,
      categories
    };
  }

  forkJoinTest() {
    const src = forkJoin(
      {
        products: this.http.get(`https://localhost:5001/api/products`),
        categories: this.http.get(`https://localhost:5001/api/categories`)
      }
    );
    return src.pipe(map(this.mapper));
  }
}
