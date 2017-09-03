import { Component } from "@angular/core";

@Component({
	selector: "games",
	template: `
<h2>{{title}}</h2>
`,
})

export class GamesComponent {
	title = "Games View";
	//...
}