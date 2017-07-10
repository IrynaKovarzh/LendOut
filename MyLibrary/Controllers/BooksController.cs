using System.Web.Http;
using MyLibrary.Models;
using System.Collections.Generic;
using System.Net.Http;
using System.Net;
using System;

namespace MyLibrary.Controllers
{
    public class BooksController : ApiController
    {
        private BooksCatalogue _catalogue;

        public BooksController()
        {
            _catalogue = new BooksCatalogue();
        }

        // GET: api/Books
        public IEnumerable<Book> GetAllBooks()
        {
            return _catalogue.GetAll();
        }

        // GET: api/Books/id 
        // IHttpActionResult
        public Book GetBook(int id)
        {
            Book book = _catalogue.Get(id);

            if (book == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            return book;
        }

        // POST: api/Books
        // From the body
        public HttpResponseMessage PostBook(Book book)    
        {
            if (book == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest); 
                // HttpResponseMessage response = Request.CreateErrorResponse;  
            }

            var createdBook = _catalogue.Add(book);   //.Conflict in case Add is not successful

            var response = Request.CreateResponse(HttpStatusCode.Created, createdBook);            
            response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = createdBook.Id }));

            return response;                        
        }

        // PUT: api/Books/
        // From the body
        public HttpResponseMessage PutBook(int id, Book book)   // P   ...Book
        {         
            bool isSuccess = _catalogue.Update(id, book);

            if (!isSuccess)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }

            var response = Request.CreateResponse(HttpStatusCode.OK, book);
            response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = book.Id }));

            return response;
        }

        // PATCH (partial update): to replace only certain properties of a record instead of replacing it entirely

        // DELETE: api/Books/id         
        public HttpResponseMessage DeleteBook(int id)
        {
            bool isSuccess = _catalogue.Delete(id);

            if (!isSuccess)
            {
                return new HttpResponseMessage(HttpStatusCode.NotFound);
            }
            
            HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NoContent);
            return response;
        }

    }
}
