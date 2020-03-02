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
    path: 'trial',
    loadChildren: () => import('./modules/trial/trial.module').then(m => m.TrialModule)
  },
  {
    path: '',
    redirectTo: 'trial',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
