import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {SchemaId, Seat} from "../../shared/interfaces";
import {nPlanes, nPlanesSuccess} from "../actions/plane.actions";
import {map, mergeMap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";



@Injectable()
export class PlaneEffects {
  planeLoading = createEffect(() => this.actions$.pipe(
    ofType(nPlanes),
    mergeMap(({id}) => this.http.get<{id: SchemaId, data: Seat[] }>(`http://localhost:3000/seats/${id}`)),
    map(({id, data : seats}) => nPlanesSuccess({id, seats}))
  ))


  constructor(private actions$: Actions,
              private http: HttpClient) {}

}
