import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { ZipCodeState, zipcodeReducer } from './zipcode/zip-codes.reducer';

import { environment } from 'environments/environment';

export interface State {
  zipcodes: ZipCodeState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
