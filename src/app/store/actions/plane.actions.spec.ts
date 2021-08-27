import * as fromPlane from './plane.actions';

describe('nPlanes', () => {
  it('should return an action', () => {
    expect(fromPlane.nPlanes().type).toBe('[Plane] N Planes');
  });
});
