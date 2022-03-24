import { Component } from "@angular/core";
import { mock_subnewscard } from "../cards-news/mock_subnewscard";
import { SubNewsCardModel } from "../cards-news/subnewscard.model";

@Component({
    selector: 'featured',
    templateUrl: 'featured.layout.component.html',
    styleUrls: ['featured.layout.component.css']
})
export class FeaturedLayoutComponent {
    title = 'genius';
    subnewscards: SubNewsCardModel [] = [];
  
    constructor() {
      for (var subnews of mock_subnewscard) {
        console.log(subnews);
        this.subnewscards.push(subnews);
      }
    }

}