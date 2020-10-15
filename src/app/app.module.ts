import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { CdkStepperModule } from '@angular/cdk/stepper';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockAComponent } from './shared/components/block-a/block-a.component';
import { BlockBComponent } from './shared/components/block-b/block-b.component';
import { BlockCComponent } from './shared/components/block-c/block-c.component';
import { BlockDComponent } from './shared/components/block-d/block-d.component';
import { BlockEComponent } from './shared/components/block-e/block-e.component';
import { StepSelectorComponent } from './shared/step-selector/step-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockAComponent,
    BlockBComponent,
    BlockCComponent,
    BlockDComponent,
    BlockEComponent,
    StepSelectorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatStepperModule,
    CdkStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
