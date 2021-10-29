import { Injectable } from '@angular/core';
import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { ITestService } from 'src/app/services/interfaces/itestservice.interface';
import { Test } from '../models/test';
import { TestService } from '../services/test.service';

import { TestsComponent } from './tests.component';

@Injectable()
export class MockTestService implements ITestService {

  GetTests(): Observable<Test[]> {
    return of([
      {
        id:1,
        name:'Hello'
      },
      {
        id:2,
        name:'world'
      }
    ] as Test[])
  }

}

describe('TestsComponent', () => {
  let component: TestsComponent;
  let fixture: ComponentFixture<TestsComponent>;
  let mockTestSvc = new MockTestService()
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsComponent ],
      providers: [
        {
          provide:TestService,
          useValue:mockTestSvc
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct amount of tests', fakeAsync(():void => {
    fixture = TestBed.createComponent(TestsComponent);
    let debugElement = fixture.debugElement;
    component = fixture.componentInstance;

    fixture.detectChanges();

    component.GetTests().toPromise().then(r => {
      expect(r.length).toBe(2);
    });

    let itemsCount = debugElement.queryAll(By.css('.item')).length;
    expect(itemsCount).toBe(2);

  }));
});
