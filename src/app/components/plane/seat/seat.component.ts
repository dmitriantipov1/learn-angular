import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

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

  @Output() clickOnTheTicket = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addTicketToChart(){
    //do something
  }

}
