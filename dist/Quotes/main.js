(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quotes></app-quotes>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quotes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _timepassed_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timepassed.pipe */ "./src/app/timepassed.pipe.ts");
/* harmony import */ var _quotes_form_quotes_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotes-form/quotes-form.component */ "./src/app/quotes-form/quotes-form.component.ts");
/* harmony import */ var _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./quotes/quotes.component */ "./src/app/quotes/quotes.component.ts");
/* harmony import */ var _quotes_details_quotes_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quotes-details/quotes-details.component */ "./src/app/quotes-details/quotes-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_4__["HighlightDirective"],
                _timepassed_pipe__WEBPACK_IMPORTED_MODULE_5__["TimepassedPipe"],
                _quotes_form_quotes_form_component__WEBPACK_IMPORTED_MODULE_6__["QuotesFormComponent"],
                _quotes_quotes_component__WEBPACK_IMPORTED_MODULE_7__["QuotesComponent"],
                _quotes_details_quotes_details_component__WEBPACK_IMPORTED_MODULE_8__["QuotesDetailsComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elem) {
        this.elem = elem;
        this.elem.nativeElement.style.background =
            "linear-gradient(to bottom, #474747, #2a2a2a, #1b1b1b)";
        this.elem.nativeElement.style.boxShadow =
            "inset 0 1px 0 #636363, 0 1px 4px -1px #000";
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[appHighlight]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/quotes-details/quotes-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/quotes-details/quotes-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quoteAuthor {\n  font-size: 22px;\n  font-style: italic;\n  font-weight: 600;\n  color: rgb(255, 204, 0);\n}\n\n.extraDetails {\n  font: 15px bolder;\n}\n"

/***/ }),

/***/ "./src/app/quotes-details/quotes-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/quotes-details/quotes-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 class=\"quoteAuthor\">'{{quote.author}}'</h3>\n  <div class=\"ml-4\">\n    <div class=\"extraDetails\">\n      <p class=\"quoteUser py-1\">added by {{quote.user}}</p>\n    </div>\n    <div class=\"d-flex py-1\">\n      <p>\n        <button class=\"btn btn-sm btn-dark px-3 mr-1 py-0\" on-click=\"addUpVotes()\">👍</button> {{quote.upvotes}}\n      </p>\n      <p>\n        <button class=\"btn btn-sm btn-dark px-3 py-0 mr-2 ml-3\" on-click=\"addDownVotes()\">👎</button>{{quote.downvotes}}\n      </p>\n    </div>\n    <div class=\"d-flex flex-row\">\n      <p class=\"form-control-sm pl-0 text-warning\">quote-{{quote.id}} </p>\n      <p class=\"form-control-sm pl-0\"> {{quote.timepassed | timepassed}}ago </p>\n    </div>\n    <button class=\"btn btn-sm btn-warning text-black-50\" (click)=\"toDelete()\">Delete Quote</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quotes-details/quotes-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/quotes-details/quotes-details.component.ts ***!
  \************************************************************/
/*! exports provided: QuotesDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesDetailsComponent", function() { return QuotesDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesDetailsComponent = /** @class */ (function () {
    function QuotesDetailsComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isdelete = false;
    }
    QuotesDetailsComponent.prototype.addUpVotes = function () {
        this.quote.upvotes += 1;
    };
    QuotesDetailsComponent.prototype.addDownVotes = function () {
        this.quote.downvotes += 1;
    };
    QuotesDetailsComponent.prototype.toDelete = function () {
        this.isdelete = !this.isdelete;
        this.delete.emit(this.isdelete);
    };
    QuotesDetailsComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"])
    ], QuotesDetailsComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuotesDetailsComponent.prototype, "delete", void 0);
    QuotesDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quotes-details",
            template: __webpack_require__(/*! ./quotes-details.component.html */ "./src/app/quotes-details/quotes-details.component.html"),
            styles: [__webpack_require__(/*! ./quotes-details.component.css */ "./src/app/quotes-details/quotes-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotesDetailsComponent);
    return QuotesDetailsComponent;
}());



/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-section {\n  border: solid 1px #ababab;\n  border-radius: 10px;\n  background-color: rgba(47, 47, 47, 0.544)\n}\n\nbutton {\n  color: #FFCC00;\n}\n\nbutton#newQuote {\n  background: linear-gradient(to bottom, #474747, #2a2a2a, #1b1b1b);\n  box-shadow: inset 0 1px 0 #636363, 0 1px 4px -1px #000;\n}\n\nbutton#submit {\n  background: linear-gradient(to bottom, #474747, #2a2a2a, #1b1b1b);\n  box-shadow: inset 0 1px 0 #636363, 0 1px 4px -1px #000;\n}\n\nbutton:hover {\n  background: #D4332E;\n}\n\nlabel {\n  border: none;\n  color: #b8b8b8;\n  font-size: 18px;\n}\n"

/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-section p-3\">\n  <div>\n    <button id=\"newQuote\" class=\"btn btn-sm\" (click)=\"clearInputs()\">Add New Quote</button>\n  </div>\n  <form class=\"hide my-2 p-2\">\n    <div class=\"form-group\">\n      <label class=\"form-control-sm bg-transparent w-auto d-inline-flex\" for=\"quote\">Add a new quote</label>\n      <textarea class=\"form-control bg-light-white\" [(ngModel)]=\"quote\" name=\"quote\" id=\"quote\" cols=\"30\" rows=\"3\"></textarea>\n    </div>\n    <div class=\"form-group-sm d-inline-block\">\n      <label class=\"form-control w-auto d-inline-flex bg-transparent\" for=\"author\">Author</label>\n      <input class=\"form-control bg-light-white\" [(ngModel)]=\"author\" id=\"author\" name=\"author\" type=\"text\">\n    </div>\n    <div class=\"form-group-sm d-inline-block mx-4\">\n      <label class=\"form-control d-inline-flex w-auto bg-transparent\" for=\"user\">User</label>\n      <input class=\"form-control bg-light-white\" [(ngModel)]=\"user\" id=\"user\" name=\"user\" type=\"text\">\n    </div>\n    <!-- <button class=\"btn d-block btn-sm my-2\">save</button> -->\n    <button (click)=\"publishQuote()\" id=\"submit\" type=\"submit\" class=\"btn d-block btn-sm my-2\">Submit</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/quotes-form/quotes-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/quotes-form/quotes-form.component.ts ***!
  \******************************************************/
/*! exports provided: QuotesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesFormComponent", function() { return QuotesFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quotes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quotes */ "./src/app/quotes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesFormComponent = /** @class */ (function () {
    function QuotesFormComponent() {
        this.quotesArray = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    QuotesFormComponent.prototype.ngOnInit = function () {
        this.quotes = [
            new _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"](1, "It took thirty-eight years before 50 million people gained access to radios. It took television thirteen years to earn an audience that size. It took Instagram a year and a half.", 0, 0, "Gary Vaynerchuk", "Victor Ireri", new Date()),
            new _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"](2, "life shrinks and expands on the proportion of your willingness to take risks and try new things.", 0, 0, "Gary Vaynerchuk", "Victor Ireri", new Date())
        ];
    };
    QuotesFormComponent.prototype.publishQuote = function () {
        var Quote = new _quotes__WEBPACK_IMPORTED_MODULE_1__["Quotes"](this.quotes.length + 1, this.quote, 0, 0, this.author, this.user, new Date());
        this.quotes.push(Quote);
        this.quotesArray.emit(this.quotes);
        console.log(this.quotes);
    };
    QuotesFormComponent.prototype.clearInputs = function () {
        this.quote = "";
        this.author = "";
        this.user = "";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], QuotesFormComponent.prototype, "quotesArray", void 0);
    QuotesFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quotes-form",
            template: __webpack_require__(/*! ./quotes-form.component.html */ "./src/app/quotes-form/quotes-form.component.html"),
            styles: [__webpack_require__(/*! ./quotes-form.component.css */ "./src/app/quotes-form/quotes-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotesFormComponent);
    return QuotesFormComponent;
}());



/***/ }),

/***/ "./src/app/quotes.ts":
/*!***************************!*\
  !*** ./src/app/quotes.ts ***!
  \***************************/
/*! exports provided: Quotes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quotes", function() { return Quotes; });
var Quotes = /** @class */ (function () {
    function Quotes(id, quote, upvotes, downvotes, author, user, timepassed) {
        this.id = id;
        this.quote = quote;
        this.upvotes = upvotes;
        this.downvotes = downvotes;
        this.author = author;
        this.user = user;
        this.timepassed = timepassed;
    }
    return Quotes;
}());



/***/ }),

/***/ "./src/app/quotes/quotes.component.css":
/*!*********************************************!*\
  !*** ./src/app/quotes/quotes.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  letter-spacing: 0.13rem;\n}\n\n.jumbotron {\n  height: auto;\n  background-color: rgba(45, 45, 45, 0.647);\n}\n\n.main {\n  background-image: url('mainbg.jpg');\n  background-size: 100% auto;\n  background-attachment: fixed;\n  background-position: center;\n}\n\n.title {\n  margin-left: 10%;\n}\n\n.small {\n  color: #FFCC00;\n  font-style: italic;\n}\n\n.sub-title {\n  margin-left: 10%;\n  font-family: 'Times New Roman', Times, serif;\n  font-weight: bolder;\n  font-style: italic;\n}\n\n.sidebar {\n  height: 100vh;\n  background-color: rgba(33, 33, 33, 0.304);\n  overflow: hidden;\n}\n\n.sidebar>img {\n  margin: 2px;\n}\n\nli {\n  list-style: none\n}\n\n.quote {\n  font-size: 22px;\n}\n\n.quoteofDay {\n  font-size: 26px;\n  font-weight: 700;\n  font-family: 'Times New Roman', Times, serif;\n  font-style: italic;\n  color: #FFCC00;\n}\n\n.authorofDay {\n  font-size: 22px;\n  font-weight: 1000;\n  color: rgb(16, 162, 8);\n  font-style: italic;\n}\n\n.allQuotes {\n  border: rgb(104, 104, 104) solid 1px;\n  border-radius: 10px;\n}\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.html":
/*!**********************************************!*\
  !*** ./src/app/quotes/quotes.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"jumbotron-fluid py-5 mb-3 \">\n    <h1 class=\"display-2 title pt-3\">\n      <span>BestLifeQuotes</span>\n      <span class=\"small\">.com</span>\n    </h1>\n    <p class=\"sub-title text-uppercase pb-3\">Get your daily inspiration</p>\n  </div>\n</header>\n\n<div class=\"main pt-5\">\n  <div class=\"new-quote mx-3\">\n    <app-quotes-form (quotesArray)=\"getNewQuote($event)\"></app-quotes-form>\n  </div>\n  <div class=\"container-fluid d-flex\">\n    <div class=\"sidebar w-25 p-3 my-3\">\n      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/quote7.jpg\" alt=\"quote7\">\n      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/quote6.jpg\" alt=\"quote7\">\n      <img class=\"img-fluid img-thumbnail\" src=\"../../assets/quote4.jpg\" alt=\"quote7\">\n    </div>\n    <div class=\"jumbotron p-3 my-3  main-area w-75\">\n      <button class=\"btn btn-sm mb-2\" (click)=\"updateQuotes()\">Refresh</button>\n      <div>\n        <div class=\"my-3 p-2\" appHighlight>\n          <h1 class=\"mt-1\">Quote Of The day</h1>\n          <p class=\"mx-3 quoteofDay\">\"{{quoteOfDay}}\"</p>\n          <div>\n            <p class=\"authorofDay d-flex justify-content-end mx-3 pr-5\"> ― {{quoteAuthor}} </p>\n          </div>\n        </div>\n        <ul>\n          <li class=\"ml-5 allQuotes p-3 my-2\" *ngFor='let quote of quotes; let i = index'>\n            <p class=\"quote\"> {{quote.quote}} </p>\n            <div class=\"d-flex justify-content-end\">\n              <app-quotes-details (delete)=\"deleteQuote($event, i)\" [quote]='quote'></app-quotes-details>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quotes/quotes.component.ts":
/*!********************************************!*\
  !*** ./src/app/quotes/quotes.component.ts ***!
  \********************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuotesComponent = /** @class */ (function () {
    function QuotesComponent() {
    }
    QuotesComponent.prototype.getNewQuote = function (x) {
        console.log(x);
        this.quotesArray = x;
    };
    QuotesComponent.prototype.updateQuotes = function () {
        var likes = 0;
        for (var i = 0; i < this.quotesArray.length; i++) {
            if (this.quotesArray[i].upvotes > likes) {
                likes = i;
                if (likes == 0) {
                    likes = this.quotesArray.length;
                }
            }
        }
        this.quoteOfDay = this.quotesArray[likes].quote;
        this.quoteAuthor = this.quotesArray[likes].author;
        console.log(this.quoteAuthor);
        this.quotes = this.quotesArray;
    };
    QuotesComponent.prototype.deleteQuote = function (x, i) {
        console.log(x);
        if (x == true) {
            var toDelete = confirm("Are you sure you want to delete " + this.quotes[i].quote);
            this.quotes.splice(i, 1);
        }
    };
    QuotesComponent.prototype.ngOnInit = function () { };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-quotes",
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.css */ "./src/app/quotes/quotes.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/timepassed.pipe.ts":
/*!************************************!*\
  !*** ./src/app/timepassed.pipe.ts ***!
  \************************************/
/*! exports provided: TimepassedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimepassedPipe", function() { return TimepassedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TimepassedPipe = /** @class */ (function () {
    function TimepassedPipe() {
    }
    TimepassedPipe.prototype.transform = function (value) {
        var today = new Date(); //get current date and time
        var dateDifference = Math.abs(value - today); // returns value in milliseconds
        var Seconds = dateDifference * 0.001; //converts to seconds
        var days = parseInt(Seconds / 86400 + "");
        var hours = parseInt((Seconds % 86400) / 3600 + "");
        var minutes = parseInt(((Seconds % 86400) % 3600) / 60 + "");
        var seconds = parseInt(Seconds + "");
        if (Seconds >= 86400) {
            return days + " days";
        }
        else if (Seconds < 86400 && Seconds >= 3600) {
            return hours + " hours ";
        }
        else if (Seconds < 3600 && Seconds >= 60) {
            return minutes + " minutes ";
        }
        else {
            return seconds + " seconds ";
        }
    };
    TimepassedPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "timepassed"
        })
    ], TimepassedPipe);
    return TimepassedPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vikki/Documents/core11/Quotes/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map