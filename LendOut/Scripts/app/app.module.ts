///<reference path="../../typings/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from '@angular/router';
import 'rxjs/Rx';

import { AboutComponent } from "./about.component";
import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import { LoginComponent } from "./login.component";
import { GamesComponent } from "./games.component";

import { BooksComponent } from "./books.component";
import { BookDetailComponent } from "./book-detail.component";
import { BookListComponent } from "./book-list.component";
import { BooksService } from "./books.service";

import { PageNotFoundComponent } from "./page-not-found.component";

import { AppRouting } from "./app.routing";


@NgModule({
	// directives, components, and pipes
	declarations: [
		AppComponent,

		AboutComponent,
		HomeComponent,
		LoginComponent,

		BookDetailComponent,
		BookListComponent,
		BooksComponent,

		GamesComponent,

		PageNotFoundComponent,
	],
	// modules
	imports: [
		BrowserModule,
		HttpModule,
		FormsModule,
		RouterModule,
		AppRouting,
	],
	// providers
	providers: [
		BooksService
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }