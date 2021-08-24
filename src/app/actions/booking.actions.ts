import { createAction, props } from '@ngrx/store';

export const nBookingDelete = createAction(
  '[Booking] N Booking Removing',
  props<{ id: number }>()
);

export const nBookings = createAction(
  '[Booking] N Bookings',
  props<{ id: number }>()
);

export const nBookingsSuccess = createAction(
  '[Booking] N Bookings Success',
  props<{ data: any }>()
);

export const nBookingsFailure = createAction(
  '[Booking] N Bookings Failure',
  props<{ error: any }>()
);
