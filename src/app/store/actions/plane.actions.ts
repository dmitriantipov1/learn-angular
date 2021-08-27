import { createAction, props } from '@ngrx/store';
import {SchemaId, Seat} from "../../shared/interfaces";

export const nPlanes = createAction(
  '[Plane] N Planes',
  props<{id: SchemaId}>()
);

export const nPlanesSuccess = createAction(
  '[Plane] N Planes Success',
  props<{ id: SchemaId, seats: Seat[] }>()
);

export const nPlanesFailure = createAction(
  '[Plane] N Planes Failure',
  props<{ error: any }>()
);
