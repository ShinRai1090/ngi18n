import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { WeatherForecastComponent } from './weather-forecast.component';

import { ZipcodeEntryComponent } from './childComponents/zipcodeEntry/zipcode-entry.component';
import { CurrentConditionsComponent } from './childComponents/currentConditions/current-conditions.component';

const weatherForecastRoutes: Routes = [{
  path: '',
  component: WeatherForecastComponent
}];

@NgModule({
  declarations: [
    WeatherForecastComponent,
    ZipcodeEntryComponent,
    CurrentConditionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(weatherForecastRoutes)
  ],
  exports: [
    WeatherForecastComponent
  ]
})
export class WeatherForecastModule { }
