import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { BlockAComponent } from './shared/components/block-a/block-a.component';
import { Step, WizardSpec } from './shared/models/steap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  spec: WizardSpec;

  constructor() {}

  ngOnInit(): void {
    this.spec = new WizardSpec();
    this.spec.steps = [
      new Step('blockA', 'Block A'),
      // new Step('blockB', 'Block B'),
      new Step('blockC', 'Block C'),
      new Step('blockD', 'Block D'),
      // new Step('blockE', 'Block E'),
    ];
  }

  setReference(step, ref): void {
    for (const tmp of this.spec.steps) {
      console.log(tmp)
      if (tmp.id === step.id){
        tmp.block = ref;
        return;
      }
    }
  }

  onClickNext(step: Step): void {
    step.block.validate().subscribe((valid: boolean) => {
      if (valid){
        this.stepper.next();
      }
    });
  }
}
