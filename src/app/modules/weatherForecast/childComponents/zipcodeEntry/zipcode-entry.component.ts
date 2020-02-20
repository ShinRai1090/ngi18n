import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'app/reducers';
import { AddZipcode } from 'app/actions/zipcode/zipcode.actions';

@Component({
  selector: 'app-zipcode-entry',
  templateUrl: './zipcode-entry.component.html',
  styleUrls: ['./zipcode-entry.component.scss']
})
export class ZipcodeEntryComponent implements OnInit, OnDestroy {

  constructor(
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }

  addLocation(zipcode: string) {
    this.store.dispatch(new AddZipcode(zipcode));
  }

  ngOnDestroy(): void {

  }

}
