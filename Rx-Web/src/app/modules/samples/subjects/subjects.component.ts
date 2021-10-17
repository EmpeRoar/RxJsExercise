import { SampleService } from './../../../services/sample.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  ngForm: FormGroup;
  constructor(private fb: FormBuilder, private sampleSvc: SampleService) {
    this.ngForm = this.fb.group({
        cmpName: ['', [Validators.required]],
        message: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sampleSvc.broadCast(this.ngForm.value);
  }
}
