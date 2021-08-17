import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Subject} from "rxjs";
import {Seat} from "../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class SeatService {
  seatsSubject$: Subject<Seat[]> = new Subject<Seat[]>();

  constructor(private http: HttpClient) {
    this.getSeatsValuesFromServer();
  }

  getSeatsValuesFromServer(): void{
    this.http.get<Seat[]>('http://localhost:3000/seats').subscribe(seats => {
      this.seatsSubject$.next(seats)
    })
  }

}
