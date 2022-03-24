export class SubNewsCardModel {
    content: string;
    title: string;
    author: string;
    date: string;
    img: string;

    constructor(content: string, title: string, author: string, date: string, img: string) {
        this.content = content;
        this.title = title;
        this.author = author;
        this.date = date;
        this.img = img;
    }
}