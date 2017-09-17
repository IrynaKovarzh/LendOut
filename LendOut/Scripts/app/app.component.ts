import { Component } from '@angular/core';

@Component({
	selector: "openlist",
	template: `
<h1>{{title}}</h1>
<div class="menu">
  <a class="home" [routerLink]="['']">Home</a>
| <a class="about" [routerLink]="['about']">About</a>
| <a class="login" [routerLink]="['login']">Login</a>
<router-outlet></router-outlet>
</div>
`
})

export class AppComponent {
	title = 'Lend Out';	
}