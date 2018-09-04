import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['First', 'Second']);
  goalObsv = this.goals.asObservable();

  constructor() { }

  changeGoal(goal)
  {
    this.goals.next(goal);
  }
}
