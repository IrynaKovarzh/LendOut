import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Book } from "./book";
import { BooksService } from "./books.service";

@Component({
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
})

export class BookListComponent implements OnInit {
	selectedBook: Book;

	books: Book[];
	errorMessage: string;

	constructor(private bookService: BooksService, private router: Router) { }

	ngOnInit() {
		this.getAll();
	}

	getAll() {                      
		this.bookService.getAll()
			.subscribe(
			res => this.books = res,
			//	console.log(this.books); // make sure you get data here.
			error => this.errorMessage = <any>error
			);		
	}

	onSelect(book: Book) {
		this.selectedBook = book;
		this.showDetails(book);
	}

	showDetails(book: Book) {	
		this.router.navigate(["books", book.Id]);
	}
}