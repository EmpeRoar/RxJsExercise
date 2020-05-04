### Learn RxJs

- https://github.com/EmpeRoar/AngularExercises/tree/master/RxJs2020
- https://www.learnrxjs.io/



#### Pipe (map operator)
```typescript
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
```

#### you can do a mapper here.
```typescript
export function productsMapper(products) {
  return products.map(xap => {
        const x = {
          Id: xap.Id,
          Name: xap.Name
        } as Product;
        return {
          ...x
        };
     });
}
```

##### Merge Maps
```typescript
public getListMergeMapperAll(): Observable<any> {

    const mapper = (products: any[]) => {
      return products.map(p => {
        const f = {
           Id: p.Id,
           Name: `(${p.Name})`,
           Price: p.Price
        } as Product;
        return f;
      });
    };

    const mergeMapper = (products: any[]) => {

      const productStream = new Subject<Product[]>();
      let ProductStream: Observable<Product[]>;
      ProductStream = productStream.asObservable();

      products.forEach((px: Product) => {
        this.http.get(`https://localhost:5001/api/categories/product/${px.Id}`)
        .pipe(map(
          (c: any) => {
            const f = {
               Id: c.Id,
               Name: `Catname:${c.Name}`
            } as Category;
            return f;
          }
        ))
        .subscribe(
          cat => {
            // returns a category
            const p = {
                Id: px.Id,
                Name: `${px.Name} ${cat.Name}`,
                Price: px.Price
            } as Product;
            productStream.next([p]);
          }
        );
      });

      return productStream;
    };

    const result = this.http.get(`https://localhost:5001/api/products`).pipe(
          mergeMap(mergeMapper),
          map(mapper)
    );
    return result;
  }
```
