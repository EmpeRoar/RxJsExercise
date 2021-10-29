import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OperatorService } from './operator.service';

describe('OperatorService', () => {
  let service: OperatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(OperatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
