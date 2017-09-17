/// <reference path="../../../lendout/scripts/app/home.component.ts" />
import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions, Headers} from "@angular/http";
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

	// calls the [POST] /api/items/ Web API method to add a new item.
	add(book: Book) {
		var url = this.baseUrl;
		return this.http.post(url, JSON.stringify(book),
			this.getRequestOptions())
			.map(response => response.json())
			.catch(this.handleError);
	}

// calls the [DELETE] /api/books/{id} Web API method to delete the item with the given id.
	delete(id: number) {
	var url = this.baseUrl + id;
	return this.http.delete(url)
		.catch(this.handleError);
}

	// returns a viable RequestOptions object to handle Json requests
	private getRequestOptions() {
		return new RequestOptions({
			headers: new Headers({
				"Content-Type": "application/json"
			})
		});
	}

private handleError(error: Response) {
	// output errors to the console.
	console.error(error);
	return Observable.throw(error.json().error || "Server error");
}
}