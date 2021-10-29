import { Observable } from "rxjs";
import { Test } from "src/app/modules/test/models/test";

export interface ITestService {
  GetTests() : Observable<Test[]>;
}
