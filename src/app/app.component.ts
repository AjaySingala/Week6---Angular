import { Component } from '@angular/core';
import { CommonModule } from '../../node_modules/@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  dateVal = new Date();
  jsonVal: any;

  constructor() {
    this.jsonVal =  { moo: 'foo', goo: { too: 'new' }};
  }
  
}
