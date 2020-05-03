import { Category } from './../model/category.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

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

  public getListWithCategories(): Observable<any> {
    return this.http.get(`https://localhost:5001/api/products`).pipe(
      mergeMap(x => {
        // here you can use x { Id:1, Name: 'test'} to call to categories
        // example: categories/1 , categories/2
        return this.http.get(`https://localhost:5001/api/categories`).pipe(
          map((res: any[]) => {
            return res.map(cap => {
              const m = {
                  Id: cap.Id,
                  Name: cap.Name
              } as Category;
              return {
                ...m
              };
            });
          })
        );
      })
    );
  }

}
