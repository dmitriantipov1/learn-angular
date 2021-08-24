import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Seat} from "../../shared/interfaces";
import {select, Store} from "@ngrx/store";
import {nBookingDelete, nBookings} from "../../actions/booking.actions";
import {reservedPlaces} from "../../store/selectors/plane.selectors";
import {State} from "../../models/store";
import {map, switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  public seats$: Observable<Seat[]> =  this.http.get<Seat[]>('http://localhost:3000/seats').pipe(
    switchMap(seats => this.reservedSeats$.pipe(
      map(num => seats.map(seat => {
        if(num.includes(seat.id)){
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

  reserveSeat(id: number, toAdd: boolean = false){
    toAdd ? this.store.dispatch(nBookings({ id })) : this.store.dispatch(nBookingDelete({ id }));
  }

}
