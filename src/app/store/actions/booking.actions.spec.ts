import * as fromBooking from './booking.actions';

describe('nBookings', () => {
  it('should return an action', () => {
    expect(fromBooking.nBookings().type).toBe('[Booking] N Bookings');
  });
});
