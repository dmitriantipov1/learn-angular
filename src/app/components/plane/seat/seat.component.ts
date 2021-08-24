import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {SeatService} from "../seat.service";

@Component({
  selector: '[appSeat]',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {
  @Input() x: number = 0;
  @Input() y: number = 0;
  @Input() ticketPrice: number = 0;
  @Input() ticketPositionRow: number = 0;
  @Input() ticketPositionPlace: string = '';
  @Input() id: number = 0;
  @Input() isTaken: boolean = false;

  @HostListener('click')
  click(){
    this.seatService.reserveSeat(this.id, !this.isTaken);
  }

  constructor(private seatService: SeatService) { }

  ngOnInit(): void {
  }

}
