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

  submitQuote(): void {
    this.newQuote;
  }

  @Output()
  addQuote: EventEmitter<Quotes> = new EventEmitter<Quotes>();

  publishQuote() {
    this.addQuote.emit(this.newQuote);
  }

  clearInputs() {
    this.newQuote = new Quotes(0, "", 0, 0, "", "", new Date());
  }

  ngOnInit() {}
}
