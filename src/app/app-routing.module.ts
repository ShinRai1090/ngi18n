import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
    path: 'localize',
    loadChildren: () => import('./modules/localize/localize.module').then(m => m.LocalizeModule)
  },
  {
    path: 'weather',
    loadChildren: () => import('./modules/weatherForecast/weather-forecast.module').then(m => m.WeatherForecastModule)
  },
  {
    path: '',
    redirectTo: 'customers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
