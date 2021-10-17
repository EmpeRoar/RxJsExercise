import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Message } from '../model/message.model';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private message = new Subject<Message>();
  public readonly MessageStream: Observable<Message>;

  constructor() {
    this.MessageStream = this.message.asObservable();
  }

  broadCast(message: Message) {
    this.message.next(message);
  }
}


export class MessageDispatcher {

  protected cmpName: string;

  constructor(protected sampleSvc: SampleService, private messageHandler: (message: Message) => void) {
    this.sampleSvc.MessageStream.pipe(filter(x => {

      if (this.cmpName === x.cmpName) {
        return true;
      }

    })).subscribe(e => {
      this.messageHandler(e);
    });
  }
}
