System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Book;
    return {
        setters: [],
        execute: function () {
            Book = class Book {
                constructor(Id, Title, Author, AgeCategoryId, CategoryId) {
                    this.Id = Id;
                    this.Title = Title;
                    this.Author = Author;
                    this.AgeCategoryId = AgeCategoryId;
                    this.CategoryId = CategoryId;
                }
            };
            exports_1("Book", Book);
        }
    };
});
