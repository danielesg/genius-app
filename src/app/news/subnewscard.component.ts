import { Component, Input } from "@angular/core";

@Component({
    selector: 'subnews-card',
    templateUrl: 'subnewscard.component.html',
    styleUrls: ['subnewscard.component.css']
})

export class SubNewsCardComponent {
    @Input() content: string;
    @Input() title: string;
    @Input() author: string;
    @Input() date: string;
    @Input() img: string;

    constructor() {
        this.content = "NEWS";
        this.title = "Title";
        this.author = "Author";
        this.date = "MXX X 20XX"
        this.img = "";
    }
}