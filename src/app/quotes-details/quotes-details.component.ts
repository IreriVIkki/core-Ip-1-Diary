import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
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

  @Output()
  delete: EventEmitter<boolean> = new EventEmitter<boolean>();

  addUpVotes() {
    this.quote.upvotes += 1;
  }
  addDownVotes() {
    this.quote.downvotes += 1;
  }

  isdelete: boolean = false;

  toDelete() {
    this.isdelete = !this.isdelete;
    console.log(this.isdelete);
    this.delete.emit(this.isdelete);
  }

  ngOnInit() {}
}
