import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ITestService } from 'src/app/services/interfaces/itestservice.interface';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService implements ITestService {

  constructor(private http: HttpClient) { }

  GetTests(): Observable<Test[]> {
    return this.http.get<Test[]>(`https://localhost:5001/api`);
  }
}
