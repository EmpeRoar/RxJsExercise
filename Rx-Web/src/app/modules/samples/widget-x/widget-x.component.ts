import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MessageDispatcher, SampleService } from 'src/app/services/sample.service';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/model/message.model';

@Component({
  selector: 'app-widget-x',
  templateUrl: './widget-x.component.html',
  styleUrls: ['./widget-x.component.scss']
})
export class WidgetXComponent extends MessageDispatcher implements OnInit, OnDestroy {


  @Input()
  name: string;

  messageReceive: string;
  messageStreamSub: Subscription;

  constructor(protected sampleSvc: SampleService) {
    super(sampleSvc, (msg) => this.onMessageReceive(msg));
  }

  ngOnDestroy(): void {
    if (this.messageStreamSub) {
      this.messageStreamSub.unsubscribe();
    }
  }

  onMessageReceive(msg: Message) {
    this.messageReceive = msg.message;
  }

  ngOnInit(): void {

  }

}

