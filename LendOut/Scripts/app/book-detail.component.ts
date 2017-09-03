import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Book } from "./book";
import { BooksService } from "./books.service";

@Component({
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

})
export class BookDetailComponent {
	//	@Input("book") book: Book;
	book: Book;

	constructor(private booksService: BooksService,
	         	private router: Router,
	           	private activatedRoute: ActivatedRoute) {
	}

	ngOnInit() {
		//	var id = +this.activatedRoute.snapshot.params["id"];

		this.activatedRoute.params.subscribe(
			params => {
				let id = +params['id'];
				// do something with id

				if (id) {
					this.booksService.get(id).subscribe(
						book => this.book = book
					);
				}
				else {
					//console.log("Invalid id: routing back to home...");
					this.router.navigate([""]);
				}
			}
		);
	}
}