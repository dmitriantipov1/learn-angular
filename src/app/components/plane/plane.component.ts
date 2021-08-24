import { Component, OnInit } from '@angular/core';
import {SeatService} from "./seat.service";
import {Seat} from "../../shared/interfaces";
import {Observable} from "rxjs";

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {
  seats$: Observable<Seat[]> = this.seatsService.seats$;

  constructor(protected seatsService: SeatService) {}

  ngOnInit(): void {
  }

}
