import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestsComponent } from './tests/tests.component';


@NgModule({
  declarations: [TestsComponent],
  imports: [
    CommonModule,
    TestRoutingModule
  ]
})
export class TestModule { }
