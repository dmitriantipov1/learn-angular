import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../../../shared/interfaces'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
