import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SamplesRoutingModule } from './samples-routing.module';
import { SubjectsComponent } from './subjects/subjects.component';
import { WidgetComponent } from './widget/widget.component';
import { WidgetXComponent } from './widget-x/widget-x.component';


@NgModule({
  declarations: [SubjectsComponent, WidgetComponent, WidgetXComponent],
  imports: [
    CommonModule,
    SamplesRoutingModule,
    ReactiveFormsModule
  ]
})
export class SamplesModule { }
