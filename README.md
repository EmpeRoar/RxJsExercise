### Learn RxJs

- https://github.com/EmpeRoar/AngularExercises/tree/master/RxJs2020
- https://www.learnrxjs.io/


#### Pipe (map operator)
```
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
