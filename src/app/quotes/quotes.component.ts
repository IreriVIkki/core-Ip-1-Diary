import { Component, OnInit, Input } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  constructor() {}

  getNewQuote(quotes: Array<Quotes>) {
    quotes;
  }

  ngOnInit() {}
}
