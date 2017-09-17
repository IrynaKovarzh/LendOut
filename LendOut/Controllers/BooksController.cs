using LendOut.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LendOut.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
		private static readonly BooksCatalogue _catalogue = new BooksCatalogue();

		// GET: api/Books
		[HttpGet()]
		public IActionResult GetAllBooks()
		{
			var arr = _catalogue.GetAll();
	
				return new JsonResult(arr, DefaultJsonSettings);
		}

		// GET: api/Books/id 
		// IHttpActionResult
		[HttpGet("{id}")]
		public IActionResult GetBook(int id)
	    {
		Book book = _catalogue.Get(id);
		
		return new JsonResult(book, DefaultJsonSettings);
		}

		// POST: api/Books
		// From the body
		[HttpPost()]
		public IActionResult PostBook([FromBody]Book book)
		{
			if (book == null)
			{
				// return a generic HTTP Status 500 (Not Found) if the client payload is invalid.
                return new StatusCodeResult(500);				
			}

			var createdBook = _catalogue.Add(book);   //.Conflict in case Add is not successful

			// return the newly-created book to the client.
			return new JsonResult(createdBook, DefaultJsonSettings);			
		}

		/// <summary>
		/// DELETE: api/items/{id}
		/// </summary>
		/// <returns>Deletes a Book, returning a HTTP status 200 (ok) when done.</returns>
		[HttpDelete("{id}")]
		public IActionResult DeleteBook(int id)
		{
			bool isSuccess = _catalogue.Delete(id);

			if (!isSuccess)
			{
				return NotFound(new
				{
					Error = String.Format("Book ID {0} has not been found", id)
				});
			}

			return new OkResult();
		}

/// <summary>
/// PUT: api/books/{id}
/// </summary>
/// <returns> Updates an existing Book and return it accordingly. </returns>
[HttpPut("{id}")]
		public IActionResult UpdateBook(int id, [FromBody]Book book)
		{
			bool isSuccess = _catalogue.Update(id, book);

			if (!isSuccess)
			{
				return NotFound(new
				{
					Error = String.Format("Book ID {0} has not been found", id)
				});
			}
				return new JsonResult(book, DefaultJsonSettings);
		}


		private JsonSerializerSettings DefaultJsonSettings
		{
			get
			{
				return new JsonSerializerSettings()
				{
					Formatting = Formatting.Indented
				};
			}
		}
	}	
}
