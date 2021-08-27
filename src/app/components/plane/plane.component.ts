import { Component, OnInit } from '@angular/core';
import {SeatService} from "./seat.service";
import {Seat} from "../../shared/interfaces";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {
  userChoice: string = '';
  seats$: Observable<Seat[]> = of();
  schemas$ = this.seatsService.schema$;

  constructor(protected seatsService: SeatService) {}

  ngOnInit(): void {
  }

  changeSchema(){
    this.seatsService.loadSchema(this.userChoice);
    this.seats$ = this.seatsService.getSchema(this.userChoice);
  }

}
