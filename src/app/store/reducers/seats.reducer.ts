import {createReducer, on} from '@ngrx/store';
import {nBookingDelete, nBookings} from "../actions/booking.actions";

export const seatsFeatureKey = 'bookingSeats';

export const initialState: Array<number> = [];

export const reducer = createReducer(initialState,
  on(nBookings, (state, action) => [...state, action.id]),
  on(nBookingDelete, (state, action) => state.filter(id => action.id !== id)),
);
