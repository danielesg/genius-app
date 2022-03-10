import { Component } from '@angular/core';
import { mock_subnewscard } from './news/mock_subnewscard';
import { SubNewsCardModel } from './news/subnewscard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'genius';
  subnewscards: SubNewsCardModel [] = [];

  constructor() {
    for (var subnews of mock_subnewscard) {
      console.log(subnews);
      this.subnewscards.push(subnews);
    }
  }
}
