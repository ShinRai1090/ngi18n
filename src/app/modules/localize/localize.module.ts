import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { LocalizeComponent } from './localize.component';
import { RouterModule, Routes } from '@angular/router';

const localizeRoutes: Routes = [{
  path: '',
  component: LocalizeComponent
}];

@NgModule({
  declarations: [
    LocalizeComponent
  ],
  imports: [
    CommonModule,

    FontAwesomeModule,

    RouterModule.forChild(localizeRoutes)
  ]
})
export class LocalizeModule { }
