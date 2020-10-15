import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Block } from '../../models/block.interface';

@Component({
  selector: 'app-block-a',
  templateUrl: './block-a.component.html',
  styleUrls: ['./block-a.component.scss']
})
export class BlockAComponent implements OnInit, Block {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
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
