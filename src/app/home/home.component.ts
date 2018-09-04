import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;
  goals = [];
  btnText: string;
  btn2Text: string = "Click Me";
  fname: string;
  goalText: string;

  constructor(private _data: DataService) { }

  ngOnInit() {
    // _data.goalsObsv is asObservable();
    this._data.goalObsv.subscribe(res => this.goals = res);

    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);

    this.btnText = "Add an item";
    this.fname = "Ajay";
    //this.goalText = "My first life goal";
  }

  addItem() {
    this.goals.push(this.goalText);
    this.goalText = '';
    this.itemCount = this.goals.length;

    this._data.changeGoal(this.goals);  // refresh.
  }

  removeItem(i) {
    this.goals.splice(i, 1);
    this._data.changeGoal(this.goals);  // refresh.
  }
}
