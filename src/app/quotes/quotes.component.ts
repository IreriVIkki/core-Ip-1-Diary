import { Component, OnInit, Input } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  constructor() {}

  public quotes: Array<Quotes> = [];
  public newQuote: Quotes = new Quotes(0, "", 0, 0, "", "", new Date());

  addId() {
    return this.quotes.length + 1;
  }

  getNewQuote(quote: Quotes) {
    this.quotes.push(quote);
  }

  ngOnInit() {}
}
