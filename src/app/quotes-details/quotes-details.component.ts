import { Component, OnInit, Input } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes-details",
  templateUrl: "./quotes-details.component.html",
  styleUrls: ["./quotes-details.component.css"]
})
export class QuotesDetailsComponent implements OnInit {
  constructor() {}

  @Input()
  quote: Quotes;

  addUpVotes() {
    this.quote.upvotes += 1;
  }
  addDownVotes() {
    this.quote.downvotes += 1;
  }

  ngOnInit() {}
}
