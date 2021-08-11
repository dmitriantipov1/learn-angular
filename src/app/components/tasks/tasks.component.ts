import { Component} from '@angular/core';
import {Task} from '../../shared/interfaces'
import {CdkDragDrop, transferArrayItem} from "@angular/cdk/drag-drop";
import {MatDialog} from "@angular/material/dialog";
import {TaskDialogComponent, TaskDialogResult} from "./task-dialog/task-dialog.component";



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  todo: Task[] = [
    {title: 'buy milk', description: 'Today i need buy a milk'}
  ]
  inProgress: Task[] = []
  done: Task[] = []

  constructor(private dialog: MatDialog) { }

  drop(event: CdkDragDrop<Task[]>) : void {
    if(event.previousContainer === event.container){
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
  }

  edit(list: 'done' | 'todo' | 'inProgress', task: Task): void{
      const dialogRef = this.dialog.open(TaskDialogComponent, {
        width: '270px',
        data: {
          task,
          enableDelete: true
        }
      });
      dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
        const dataList = this[list];
        const taskIndex = dataList.indexOf(task)
        if(result.delete){
          dataList.splice(taskIndex, 1)
        } else {
          dataList[taskIndex] = task
        }
      })
  }

  newTask() : void{
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: {

        }
      }
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => this.todo.push(result.task))
  }

}
