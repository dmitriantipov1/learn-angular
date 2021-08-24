import {ActionReducerMap,} from '@ngrx/store';
import {State} from "../models/store";
import * as fromSeats from './seats.reducer';

export const reducers: ActionReducerMap<State> = {
  [fromSeats.seatsFeatureKey]: fromSeats.reducer,
};
