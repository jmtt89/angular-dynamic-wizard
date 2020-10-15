import { AfterViewInit, Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { Step } from '../models/steap.model';

@Component({
  selector: 'app-step-selector',
  templateUrl: './step-selector.component.html',
  styleUrls: ['./step-selector.component.scss']
})
export class StepSelectorComponent implements AfterViewInit {
  @Input() step: Step;
  @Output() reference = new Subject<any>();

  @ViewChild('ref') ref: Step;

  constructor() { }

  ngAfterViewInit(): void {
    this.reference.next(this.ref);
  }

}
