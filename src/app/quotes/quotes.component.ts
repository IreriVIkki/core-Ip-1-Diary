import { Component, OnInit, Input } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  constructor() {}

  quotesArray: Array<Quotes>;
  quotes: Array<Quotes>;
  quoteOfDay: any;
  quoteAuthor;

  getNewQuote(x: Array<Quotes>): void {
    console.log(x);
    this.quotesArray = x;
  }

  updateQuotes() {
    var likes = 0;
    for (let i = 0; i < this.quotesArray.length; i++) {
      if (this.quotesArray[i].upvotes > likes) {
        likes = i;
        if (likes == 0) {
          likes = this.quotesArray.length;
        }
      }
    }
    this.quoteOfDay = this.quotesArray[likes].quote;
    this.quoteAuthor = this.quotesArray[likes].author;
    console.log(this.quoteAuthor);
    this.quotes = this.quotesArray;
  }

  deleteQuote(x: boolean, i: number) {
    console.log(x);
    if (x == true) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[i].quote}`
      );
      this.quotes.splice(i, 1);
    }
  }

  ngOnInit() {}
}
