import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Book } from "./book";
import { BooksService } from "./books.service";

@Component({
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

})
export class BookDetailComponent {
	book: Book;

	constructor(private booksService: BooksService,
	         	private router: Router,
				  private activatedRoute: ActivatedRoute) {
	}	

	ngOnInit() {
		var id = +this.activatedRoute.snapshot.params["id"];

		if (id) {
			this.booksService.get(id).subscribe(						
                book => this.book = book
			   );
		}
		else if (id === 0) {
			//console.log("id is 0: adding a new item...");
			this.book = new Book(0, "", "", 1, 1);
		}
		    else {
		//	console.log("Invalid id: routing back to home...");
			this.router.navigate([""]);
		     }
	}

	onInsert(book: Book)
	{		
		this.booksService.add(book)			
			.subscribe(			
			(data) => {
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

		onDelete(book: Book) {
			var id = book.Id;
			this.booksService.delete(id).subscribe(
				(data) => {
				//	console.log("Item " + id + " has been deleted.");
					this.router.navigate([""]);
				}
				//(error) => console.log(error)
			);
		}

		onUpdate(book: Book) {
			this.booksService.update(book).subscribe(
				(data) => {
					this.book = data;
					//console.log("Item " + this.item.Id + " has been updated.");
					this.router.navigate([""]);
				}
				//(error) => console.log(error)
			);
		}
		}