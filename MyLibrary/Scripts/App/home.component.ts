import { Component } from "@angular/core";
@Component({
	selector: "home",
	template: `
<h2>{{title}}</h2>
<div class="menu">
  <a class="books" [routerLink]="['books']">Books</a>
| <a class="games" [routerLink]="['games']">Games</a>
</div>
`,
})
export class HomeComponent {
	title = "Welcome View";
}