import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes-form",
  templateUrl: "./quotes-form.component.html",
  styleUrls: ["./quotes-form.component.css"]
})
export class QuotesFormComponent implements OnInit {
  constructor() {}

  newQuote = new Quotes(0, "", 0, 0, "", "", new Date());
  public quotes: Array<Quotes> = new Array<Quotes>();

  @Output()
  quotesArray: EventEmitter<Array<Quotes>> = new EventEmitter<Array<Quotes>>();

  submitQuote() {}

  publishQuote() {
    this.newQuote;
    this.quotes.push(this.newQuote);
    this.quotesArray.emit(this.quotes);
  }

  clearInputs() {
    this.newQuote = new Quotes(0, "", 0, 0, "", "", new Date());
  }

  ngOnInit() {}
}

