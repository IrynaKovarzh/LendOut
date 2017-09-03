System.register(["@angular/core", "@angular/http", "rxjs/Observable"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, Observable_1, BooksService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }
        ],
        execute: function () {
            BooksService = class BooksService {
                constructor(http) {
                    this.http = http;
                    this.baseUrl = "/api/Books/"; // web api URL
                }
                // calls the [GET] /api/Books.
                getAll() {
                    var url = this.baseUrl;
                    return this.http.get(url)
                        .map(response => response.json())
                        .catch(this.handleError);
                }
                // calls the [GET] /api/Books/id Web API method to retrieve the item with the given id.
                get(id) {
                    //if (id == null) { throw new Error("id is required."); }		
                    var url = this.baseUrl + id;
                    return this.http.get(url)
                        .map(res => res.json())
                        .catch(this.handleError);
                }
                handleError(error) {
                    // output errors to the console.
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || "Server error");
                }
            };
            BooksService = __decorate([
                core_1.Injectable(),
                __metadata("design:paramtypes", [http_1.Http])
            ], BooksService);
            exports_1("BooksService", BooksService);
        }
    };
});
