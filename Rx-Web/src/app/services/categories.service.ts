import { Category } from './../model/category.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeAll, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  // 3. mergeAll
 public getListCategoriesAndProducts(): Observable<any>{
  const request = this.http.get(`https://localhost:5001/api/categories`)
                           .pipe(
                             map((cats: any[]) => {
                                return cats.map(c => {
                                    const f = {
                                        Id: c.Id,
                                        Name:  `{{${c.Name}}}`
                                    } as Category;
                                    return f;
                                });
                             }),
                             mergeMap((categories: any[]) => {
                                return categories.map(c => {
                                  const f = {
                                      Id: c.Id,
                                      Name: `--- ${c.Name} ---`
                                  } as Category;
                                  return f;
                                });
                             })
                           );
  return request;
 }
}
