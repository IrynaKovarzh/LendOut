/// <reference path="../../../lendout/scripts/app/home.component.ts" />
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Book } from "./book";

@Injectable()
export class BooksService {
	constructor(private http: Http) { }
	
	private baseUrl = "/api/Books/"; // web api URL

	// calls the [GET] /api/Books.
	getAll() {
		var url = this.baseUrl;	
		
		return this.http.get(url)
			.map(response => response.json())
			.catch(this.handleError);
	}
	
// calls the [GET] /api/Books/id Web API method to retrieve the item with the given id.
	get(id: number) {
	//if (id == null) { throw new Error("id is required."); }		
		var url = this.baseUrl + id;

	return this.http.get(url)
		.map(res => <Book>res.json())
		//.map(res => res.json())
	//	.map(response => response.json())
		.catch(this.handleError);
}

private handleError(error: Response) {
	// output errors to the console.
	console.error(error);
	return Observable.throw(error.json().error || "Server error");
}
}