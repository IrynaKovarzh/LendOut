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
(click)="onSelect(book)">
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

	//	@Input() class: string;
	//title: string;

	books: Book[];
	errorMessage: string;

	//title = "Books List";

	constructor(private bookService: BooksService, private router: Router) { }

	ngOnInit() {
		this.getAll();
		//	this.title = this.selectedBook.Title;
		//this.title = this.books[1].Title;
	}

	getAll() {                       // (!)
		this.bookService.getAll()
			.subscribe(
			res => this.books = res,
			//	console.log(this.books); // make sure you get data here.
			error => this.errorMessage = <any>error
			);


		//this.bookService.get(1);

		//this.books = [
		//	{ Id: 1, Title: 'BBB1', Author: 'AAA1' },
		//	{ Id: 2, Title: 'BBB2', Author: 'AAA2' }	
		//];		
		//this.selectedBook = new Book(1, 'BBB', 'AAA');
	}

	onSelect(book: Book) {
		this.selectedBook = book;
		//	console.log("item with Id " + this.selectedBook.Id + " has been selected.");

		//	this.router.navigate(["book", this.selectedBook.Id]);   //!!!

		//this.router.navigate(['../api/books', this.selectedBook.Id]); 
		//this.router.navigateByUrl("../api/books/1");


		this.router.navigate(["books", this.selectedBook.Id])

		//this.router.navigate(["books", book.Id])
		//this.router.navigate(["books", 1])

		//this.bookService.get(book.Id); 

	}

}