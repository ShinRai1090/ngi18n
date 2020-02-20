import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../../services/weather.service';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.scss']
})
export class CurrentConditionsComponent implements OnInit {

  zipcodes: Array<string>;

  constructor(
    private router: Router,
    private weatherService: WeatherService,
    private store: Store<State>
  ) {
    store.select(state => state.zipcodes)
    .subscribe(
      zips => {
        this.zipcodes = zips.zipcodes;
      }
    );
  }

  ngOnInit(): void {
  }

  showForecast(zipcode: string) {
    this.router.navigate(['/forecast', zipcode]);
  }

}
