import { Component, OnInit, Input } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes",
  templateUrl: "./quotes.component.html",
  styleUrls: ["./quotes.component.css"]
})
export class QuotesComponent implements OnInit {
  constructor() {}

  Quotes = new Quotes(0, "", 0, 0, "", "", new Date());

  public quotes: Array<Quotes>;

  getNewQuote(x: Array<Quotes>) {
    x;
    console.log(x);
  }

  ngOnInit() {}
}
