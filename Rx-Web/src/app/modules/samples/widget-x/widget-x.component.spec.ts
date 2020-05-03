import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetXComponent } from './widget-x.component';

describe('WidgetXComponent', () => {
  let component: WidgetXComponent;
  let fixture: ComponentFixture<WidgetXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
