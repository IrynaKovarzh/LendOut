import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { LoginComponent } from "./login.component";
import { BooksComponent } from "./books.component";
import { BookDetailComponent } from "./book-detail.component";
import { GamesComponent } from "./games.component";
import { PageNotFoundComponent } from "./page-not-found.component";

const appRoutes: Routes = [
	{
		path: "",
		component: HomeComponent
	},
	{
		path: "home",
		redirectTo: ""
	},
	{
		path: "about",
		component: AboutComponent
	},
	{  
		path: "login",
		component: LoginComponent
	},
	{		
		path: "books/:id",
		component: BookDetailComponent
	},		
	{
		path: "books",
		component: BooksComponent
	},

	{
		path: "games",
		component: GamesComponent
	},
	{
		path: '**',
		component: PageNotFoundComponent
	}
];

export const AppRoutingProviders: any[] = [
];

export const AppRouting: ModuleWithProviders =
	RouterModule.forRoot(appRoutes);