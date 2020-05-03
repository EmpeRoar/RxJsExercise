import { Category } from './../model/category.model';
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // 1. Map Operator
  public getList(): Observable<any>{
    return this.http.get(`https://localhost:5001/api/products`).pipe(map((m: any[]) => {
      return m.map(xap => {
        const x = {
          Id: xap.Id,
          Name: xap.Name
        } as Product;
        return {
          ...x
        };
      });
    }));
  }

  // 2. MergeMap and Map Operators
  public getListWithCategories(): Observable<any> {
    return this.http.get(`https://localhost:5001/api/products`).pipe(
      mergeMap((x: any[]) => {

        let products = new Subject<Product[]>();
        let productStream: Observable<Product[]>;

        productStream = products.asObservable();

        x.forEach((product: Product) => {

          // what this should do it determine the categoy of a product man...

          this.http.get(`https://localhost:5001/api/products/category/${1}`).pipe(
            map((px: any[]) => {
              return px.map(p => {
                const m = {
                    Id: p.Id,
                    Name: `**${p.Name}**`,
                    Price: p.Price
                } as Product;
                return {
                  ...m
                };
              });
            })
          ).subscribe(
            res => {
              products.next(res);
            }
          );
        });

        return products;
      })
    );
  }


  public getProductsByCategory(categoryId: number): Observable<any> {
    return this.http.get(`https://localhost:5001/api/products/category/1`);
  }

}
