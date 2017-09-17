System.register(["@angular/core", "@angular/router", "./books.service"], function (exports_1, context_1) {
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
    var core_1, router_1, books_service_1, BookListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (books_service_1_1) {
                books_service_1 = books_service_1_1;
            }
        ],
        execute: function () {
            BookListComponent = class BookListComponent {
                constructor(bookService, router) {
                    this.bookService = bookService;
                    this.router = router;
                }
                ngOnInit() {
                    this.getAll();
                }
                getAll() {
                    this.bookService.getAll()
                        .subscribe(res => this.books = res, 
                    //	console.log(this.books); // make sure you get data here.
                    error => this.errorMessage = error);
                }
                onSelect(book) {
                    this.selectedBook = book;
                    this.showDetails(book);
                }
                showDetails(book) {
                    this.router.navigate(["books", book.Id]);
                }
            };
            BookListComponent = __decorate([
                core_1.Component({
                    selector: "book-list",
                    template: `
<h2>{{title}}</h2>

<ul class="books">
 <li *ngFor="let book of books"
[class.selected]="book === selectedBook"
(click)="showDetails(book)">
<span> {{book.Title}}, {{book.Author}}</span>
</li>
</ul>'

`,
                    styles: [`
li.selected {
background-color: #cccccc;
}
`]
                }),
                __metadata("design:paramtypes", [books_service_1.BooksService, router_1.Router])
            ], BookListComponent);
            exports_1("BookListComponent", BookListComponent);
        }
    };
});
