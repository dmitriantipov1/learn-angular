import {ActionReducerMap,} from '@ngrx/store';
import {State} from "../models/store";
import * as fromSeats from './seats.reducer';
import * as fromPlane from '../reducers/plane.reducer';

export const reducers: ActionReducerMap<State> = {
  [fromSeats.seatsFeatureKey]: fromSeats.reducer,
  [fromPlane.planeFeatureKey]: fromPlane.reducer,
};
