import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HighlightDirective } from "./highlight.directive";
import { TimepassedPipe } from "./timepassed.pipe";
import { QuotesFormComponent } from "./quotes-form/quotes-form.component";
import { QuotesComponent } from "./quotes/quotes.component";
import { QuotesDetailsComponent } from "./quotes-details/quotes-details.component";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    TimepassedPipe,
    QuotesFormComponent,
    QuotesComponent,
    QuotesDetailsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
