import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Block } from '../../models/block.interface';

@Component({
  selector: 'app-block-c',
  templateUrl: './block-c.component.html',
  styleUrls: ['./block-c.component.scss']
})
export class BlockCComponent implements OnInit, Block {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      secret: [undefined, Validators.required]
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
