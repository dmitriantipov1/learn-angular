import {seatsFeatureKey} from "../reducers/seats.reducer";
import {State} from "../models/store";
import {planeFeatureKey} from "../reducers/plane.reducer";

export const reservedPlaces = (state: State) => {
  return state[seatsFeatureKey] ?? [];
}

export const schemaPlane = (state: State, props: any) => {
  return state[planeFeatureKey][props.id] ?? [];
}

