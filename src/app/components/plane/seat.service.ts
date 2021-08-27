import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {SchemaId, Seat} from "../../shared/interfaces";
import {select, Store} from "@ngrx/store";
import {nBookingDelete, nBookings} from "../../store/actions/booking.actions";
import {reservedPlaces, schemaPlane} from "../../store/selectors/plane.selectors";
import {State} from "../../store/models/store";
import {map, switchMap} from "rxjs/operators";
import {nPlanes, nPlanesSuccess} from "../../store/actions/plane.actions";

@Injectable({
  providedIn: 'root'
})
export class SeatService {

  public schema$: Observable<string[]> = this.http.get<string[]>('http://localhost:3000/schemas');

  public seats$: Observable<Seat[]> = this.http.get<{ data: Seat[] }>(`http://localhost:3000/seats/schema1`).pipe(
    map(data => data?.data ?? []),
    switchMap(seats => this.reservedSeats$.pipe(
      map(num => seats.map(seat => {
        if (num.includes(seat.id)) {
          return {...seat, isTaken: true};
        }
        return seat;
      }))
    ))
  );

  public reservedSeats$: Observable<Array<number>> = this.store.pipe(
    select(reservedPlaces)
  );

  constructor(private http: HttpClient, private store: Store<State>) {
  }

  reserveSeat(id: number, toAdd: boolean = false) {
    toAdd ? this.store.dispatch(nBookings({id})) : this.store.dispatch(nBookingDelete({id}));
  }

  loadSchema(id: SchemaId) {
    this.store.dispatch(nPlanes({id}))
  }

  getSchema(id: SchemaId): Observable<Seat[]>{
     return this.store.pipe(
       select(schemaPlane, {id}),
     );
  }

}
