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
    this.quotes = [
      new Quotes(
        0,
        "It took thirty-eight years before 50 million people gained access to radios. It took television thirteen years to earn an audience that size. It took Instagram a year and a half.",
        0,
        0,
        "Gary Vaynerchuk",
        "Victor Ireri",
        new Date()
      ),
      new Quotes(
        0,
        "life shrinks and expands on the proportion of your willingness to take risks and try new things.",
        0,
        0,
        "Gary Vaynerchuk",
        "Victor Ireri",
        new Date()
      )
    ];
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
    this.quote = "";
    this.author = "";
    this.user = "";
  }
}
