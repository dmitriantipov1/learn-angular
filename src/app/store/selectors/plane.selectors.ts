import {seatsFeatureKey} from "../../reducers/seats.reducer";
import {State} from "../../models/store";

export const reservedPlaces = (state: State) => {
  return state[seatsFeatureKey] ?? [];
}

