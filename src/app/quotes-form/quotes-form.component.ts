import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes-form",
  templateUrl: "./quotes-form.component.html",
  styleUrls: ["./quotes-form.component.css"]
})
export class QuotesFormComponent implements OnInit {
  constructor() {}

  newQuote;
  quotes: Array<Quotes>;
  quote;
  user;
  author;

  ngOnInit() {
    this.newQuote = new Quotes(0, "", 0, 0, "", "", new Date());
    this.quotes = [];
  }

  @Output()
  quotesArray: EventEmitter<Array<Quotes>> = new EventEmitter<Array<Quotes>>();

  publishQuote() {
    var Quote = new Quotes(
      this.quotes.length + 1,
      this.quote,
      0,
      0,
      this.author,
      this.user,
      new Date()
    );
    this.quotes.push(Quote);
    this.quotesArray.emit(this.quotes);
  }

  clearInputs() {
    new Quotes(
      0,
      (this.quote = ""),
      0,
      0,
      (this.author = ""),
      (this.user = ""),
      new Date()
    );
  }
}
