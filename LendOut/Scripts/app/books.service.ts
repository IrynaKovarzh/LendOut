import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Book } from "./book";

@Injectable()
export class BooksService {
	constructor(private http: Http) { }

	private baseUrl = "api/Books/"; // web api URL

	// calls the [GET] /api/Books/id Web API method to retrieve the item with the given id.
	get(id: number) {
		if (id == null) { throw new Error("id is required."); }		
		var url = this.baseUrl + id;

		return this.http.get(url)
			.map(res => <Book>res.json())
			.catch(this.handleError);
	}

	// calls the [GET] /api/Books.
	getAll() {
		var url = this.baseUrl;

		return this.http.get(url)
			.map(response => response.json())
			.catch(this.handleError);
	}

	// calls the [POST] /api/books/ Web API method to add a new item.
	add(book: Book) {
		var url = this.baseUrl;
		return this.http.post(url, JSON.stringify(book),
			this.getRequestOptions())
			.map(response => response.json())
			.catch(this.handleError);
	}

	// calls the [DELETE] /api/books/{id} Web API method to delete the book with the given id.
	delete(id: number) {
	var url = this.baseUrl + id;
	return this.http.delete(url)
		.catch(this.handleError);
    }

	// calls the [PUT] /api/books/{id} Web API method to update an existing book.
	update(book: Book) {
		var url = this.baseUrl + book.Id;
		return this.http.put(url, JSON.stringify(book),
			this.getRequestOptions())
			.map(response => response.json())
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