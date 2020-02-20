import { ZipcodeActions, ZipcodeActionTypes } from 'app/actions/zipcode/zipcode.actions';

export const zipCodesFeatureKey = 'zipCodes';

export interface ZipCodeState {
  zipcodes: Array<string>;
}

export const initialState: ZipCodeState = {
  zipcodes: []
};

export function zipcodeReducer(state = initialState, action: ZipcodeActions): ZipCodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
      return {...state, zipcodes: [...state.zipcodes, action.zipcode]};

    case ZipcodeActionTypes.RemoveZipcode:
      return {...state, zipcodes: state.zipcodes.filter(zipCode => zipCode !== action.zipcode)};

    default:
      return state;
  }
}
