import { Action, createReducer, on } from '@ngrx/store';
import {SchemaId, Seat} from "../../shared/interfaces";
import {nPlanesSuccess} from "../actions/plane.actions";


export const planeFeatureKey = 'schemaPlane';

export interface State {
    [ schema: string ] : Seat[];
}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,
  on(nPlanesSuccess, (state, action) => {
    return {...state, [action.id]: action.seats};
  })
);

