import { Component, OnInit } from "@angular/core";
import { BookListComponent } from "./book-list.component";

@Component({
	selector: "books",
	template: `
<div class="menu">
  <a class="add" [routerLink]="[0]">Add New</a>
</div>
<h2>{{title}}</h2>
<book-list></book-list>
`,
})

export class BooksComponent {
	title = "Books";
}