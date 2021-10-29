import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.scss']
})
export class TestsComponent implements OnInit {

  constructor(private testSvc: TestService) { }

  ngOnInit(): void {
  }

  GetTests(): Observable<Test[]> {
    return this.testSvc.GetTests();
  }

}
