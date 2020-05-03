import { SampleService, MessageDispatcher } from './../../../services/sample.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/model/message.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent extends MessageDispatcher implements OnInit, OnDestroy {

  private tempName: string;
  @Input()
  public set name(value: string) {
    this.tempName = value;
    this.cmpName = value;
  }
  public get name(): string {
    return this.tempName;
  }

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
    this.cmpName = this.name;
  }

}
