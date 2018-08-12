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

  getNewQuote(x: Array<Quotes>): void {
    console.log(x);
    this.quotesArray = x;
  }

  updateQuotes() {
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
