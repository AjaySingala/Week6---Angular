import { Component, OnInit } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';

@Component({
  selector: 'app-observer',
  templateUrl: './observer.component.html',
  styleUrls: ['./observer.component.scss']
})

export class ObserverComponent implements OnInit {

   // Create simple observable that emits three values
   myObservable = Observable.of(1, 2, 3, 4, 5);

   // Create observer object
   myObserver = {
     next: x => console.log('(1) Observer got a next value: ' + x),
     error: err => console.error('(1) Observer got an error: ' + err),
     complete: () => console.log('(1) Observer got a complete notification'),
   };
   
  constructor() { }

  ngOnInit() {
    this.myObservable.subscribe(this.myObserver);

    this.myObservable.subscribe(
      x => console.log('(2) Observer got a next value: ' + x),
      err => console.error('(2) Observer got an error: ' + err),
      () => console.log('(2) Observer got a complete notification')
    );
  }

}
