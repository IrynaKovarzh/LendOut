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
    var core_1, router_1, books_service_1, BookDetailComponent;
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
            BookDetailComponent = class BookDetailComponent {
                constructor(booksService, router, activatedRoute) {
                    this.booksService = booksService;
                    this.router = router;
                    this.activatedRoute = activatedRoute;
                }
                ngOnInit() {
                    //	var id = +this.activatedRoute.snapshot.params["id"];
                    this.activatedRoute.params.subscribe(params => {
                        let id = +params['id'];
                        // do something with id
                        if (id) {
                            this.booksService.get(id).subscribe(book => this.book = book);
                        }
                        else {
                            //console.log("Invalid id: routing back to home...");
                            this.router.navigate([""]);
                        }
                    });
                }
            };
            BookDetailComponent = __decorate([
                core_1.Component({
                    selector: "book-detail",
                    template: `
<div class="book-details">
<h2>Detail View</h2>
<ul>

<li>
<label>Title:</label>
<input [(ngModel)]="book.Title"
placeholder="Insert the title..."/>
</li>

<li>
<label>Author:</label>
<input [(ngModel)]="book.Author"
placeholder="Insert the author..."/>
</li>

</ul>
</div>
`,
                    styles: [`
.book-details {
margin: 5px;
padding: 5px 10px;
border: 1px solid black;
background-color: #dddddd;
width: 300px;
}
.book-details * {
vertical-align: middle;
}
.book-details ul li {
padding: 5px 0;
}
`]
                }),
                __metadata("design:paramtypes", [books_service_1.BooksService,
                    router_1.Router,
                    router_1.ActivatedRoute])
            ], BookDetailComponent);
            exports_1("BookDetailComponent", BookDetailComponent);
        }
    };
});
