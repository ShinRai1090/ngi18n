import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

import { SharedMaterialModule } from '@common/modules/material/material.module';

import { TrialComponent } from './trial.component';

const trialRoutes: Routes = [{
  path: '',
  component: TrialComponent
}];

@NgModule({
  declarations: [TrialComponent],
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    RxReactiveFormsModule,

    RouterModule.forChild(trialRoutes),

    SharedMaterialModule
  ]
})
export class TrialModule { }
