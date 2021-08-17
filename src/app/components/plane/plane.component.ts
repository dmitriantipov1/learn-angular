import { Component, OnInit } from '@angular/core';
import {SeatService} from "./seat.service";
import {Seat} from "../../shared/interfaces";

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {
  seats: Seat[] = [];

  constructor(protected seatsService: SeatService) {}

  ngOnInit(): void {
    this.seatsService.seatsSubject$.subscribe((seats) => {
      this.seats = seats
    })
  }

}
