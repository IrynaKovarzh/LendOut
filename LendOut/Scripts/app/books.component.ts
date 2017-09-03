import { Component, OnInit } from "@angular/core";
import { BookListComponent } from "./book-list.component";
// import { BooksService } from "./books.service";

@Component({
	selector: "books",
	template: `
<h2>{{title}}</h2>
<book-list></book-list>
`,
})

export class BooksComponent {
	title = "Books";
}