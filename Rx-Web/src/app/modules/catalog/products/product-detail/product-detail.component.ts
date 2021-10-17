import { BusinessLogin, BusinessloginUrl, ServerLink, ServerType } from './../../../../model/businessloginurl.model';
import { OperatorService } from './../../../../services/operator.service';
import { Product } from './../../../../model/product.model';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private operatorSvc: OperatorService) { }

  ngOnInit(): void {
    this.interfaceTest();
    this.checkOf();
    this.checkForkJoin();
  }

  interfaceTest() {
    const b: BusinessLogin = {
      url: {
          api: 'shit',
          loggin: 'logging',
          messaging: 'messaging',
          serverLinks: [
            {
              serverType: ServerType.API,
              url: `(api)`
            } as ServerLink,
            {
              serverType: ServerType.Auth,
              url: `(auth)`
            } as ServerLink
          ]
      } as BusinessloginUrl
    } as BusinessLogin;
    const api = b.url['api'];
    console.log(`--${api}--`);

    const api3 = b.url.api;
    console.log(`--${api3}--`);

    const api2 = b.url.serverLinks.filter(x => x.serverType === ServerType.API)[0].url;
    console.log(`--2:${api2}--`);

    const api4 = b.url.serverLinks.find(x => x.serverType === ServerType.API).url;
    console.log(`--4:${api4}--`);

    console.log(`--5:${ServerType[ServerType.API]}--`);


    const api6 = b.url.serverLinks.find(x => ServerType[x.serverType] === ServerType[ServerType.API]).url;
    console.log(`--6:${api6}--`);
  }

  checkForkJoin() {
    this.operatorSvc.forkJoinTest().subscribe(res => {
      console.log(res);
    });
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
