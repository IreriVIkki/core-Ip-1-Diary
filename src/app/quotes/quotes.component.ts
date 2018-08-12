import { Component, OnInit, Input } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  constructor() {}

  quotes: Array<Quotes>;

  getNewQuote(x: Array<Quotes>): void {
    console.log(x);
    this.quotes = x;
  }

  ngOnInit() {}
}
