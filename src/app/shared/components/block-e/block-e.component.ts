import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Block } from '../../models/block.interface';

@Component({
  selector: 'app-block-e',
  templateUrl: './block-e.component.html',
  styleUrls: ['./block-e.component.scss']
})
export class BlockEComponent implements OnInit, Block {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  initialize(data: any): void {
    this.form.patchValue(data);
  }

  validate(): Observable<boolean> {
    return of(this.form.valid);
  }

  finalize(): void {

  }

}
