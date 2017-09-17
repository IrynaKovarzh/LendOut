export class Book {
	constructor(
		public Id: number,
		public Title: string,
		public Author: string,

		public AgeCategoryId: number,
		public CategoryId : number
	) { }
}