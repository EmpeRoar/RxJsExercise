import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product.model';
import { map } from 'rxjs/operators';

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
}
