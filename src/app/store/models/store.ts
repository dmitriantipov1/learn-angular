import {Seat} from "../../shared/interfaces";
import * as fromSeats from "../reducers/seats.reducer";
import * as fromPlane from '../reducers/plane.reducer';

export type Seats = Array<Pick<Seat, "id" | "positionRow" | "positionPlace" | "price" | "isTaken">>;

export interface State {
  [fromSeats.seatsFeatureKey]: Array<number>;
  [fromPlane.planeFeatureKey]: any;
}
