import { Component, OnInit } from '@angular/core';
import { WikipediaService } from '../services/wikipedia.service';

@Component({
  selector: 'app-wikipedia',
  templateUrl: './wikipedia.component.html',
  styleUrls: ['./wikipedia.component.scss']
})
export class WikipediaComponent implements OnInit {

  items: Array<string>;

  constructor(private wikipediaService: WikipediaService) { }

  ngOnInit() {
  }

  search(term) {
    this.wikipediaService.search(term)
      .then(items => this.items = items);
  }
}
