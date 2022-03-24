import { Component, Input } from "@angular/core";

@Component({
    selector: 'mainnews-card',
    templateUrl: 'mainnewscard.component.html',
    styleUrls: ['mainnewscard.component.css']
})

export class MainNewsCardComponent {
    @Input() content: string;
    @Input() title: string;
    @Input() desc: string;
    @Input() author: string;
    @Input() date: string;
    @Input() img: string;

    constructor() {
        this.content = "NEWS";
        this.title = "Title";
        this.desc = "Description";
        this.author = "Author";
        this.date = "MXX X 20XX"
        this.img = "";
    }
}