System.register(["@angular/core", "@angular/router", "./book", "./books.service"], function (exports_1, context_1) {
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
    var core_1, router_1, book_1, books_service_1, BookDetailComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (book_1_1) {
                book_1 = book_1_1;
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
                    var id = +this.activatedRoute.snapshot.params["id"];
                    if (id) {
                        this.booksService.get(id).subscribe(book => this.book = book);
                    }
                    else if (id === 0) {
                        //console.log("id is 0: adding a new item...");
                        this.book = new book_1.Book(0, "", "", 1, 1);
                    }
                    else {
                        //	console.log("Invalid id: routing back to home...");
                        this.router.navigate([""]);
                    }
                }
                onInsert(book) {
                    this.booksService.add(book)
                        .subscribe((data) => {
                        this.book = data;
                        //	console.log("Book " + this.book.Id + " has been added.");
                        this.router.navigate([""]);
                    }
                    //	(error) => console.log(error)
                    );
                }
                onBack() {
                    this.router.navigate([""]);
                }
                onDelete(book) {
                    var id = book.Id;
                    this.booksService.delete(id).subscribe((data) => {
                        //	console.log("Item " + id + " has been deleted.");
                        this.router.navigate([""]);
                    }
                    //(error) => console.log(error)
                    );
                }
                onUpdate(book) {
                    this.booksService.update(book).subscribe((data) => {
                        this.book = data;
                        //console.log("Item " + this.item.Id + " has been updated.");
                        this.router.navigate([""]);
                    }
                    //(error) => console.log(error)
                    );
                }
            };
            BookDetailComponent = __decorate([
                core_1.Component({
                    selector: "bookdetail",
                    template: `
<div *ngIf="book" class="book-details">
<h2>Detail View</h2>

<ul>
<li>
<label>Title:</label>
<input [(ngModel)]="book.Title" name="Title"
placeholder="Insert the title..."/>
</li>

<li>
<label>Author:</label>
<input [(ngModel)]="book.Author" name="Author"
placeholder="Insert the author..."/>
</li>

<li>
<label>Age Category:</label>
<input [(ngModel)]="book.AgeCategoryId" name="AgeCategoryId"/> 
</li>

<li>
<label>Category:</label>
<input [(ngModel)]="book.CategoryId" name="CategoryId"/>
</li>

</ul>

<div *ngIf="book.Id == 0" class="commands insert">
<input type="button" value="Save" (click)="onInsert(book)"/>
<input type="button" value="Cancel" (click)="onBack()" />
</div>

<div *ngIf="book.Id != 0" class="commands update">
<input type="button" value="Update" (click)="onUpdate(book)"
/>
<input type="button" value="Delete" (click)="onDelete(book)"
/>
<input type="button" value="Back" (click)="onBack()" />
</div>

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
