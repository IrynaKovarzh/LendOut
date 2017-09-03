using LendOut.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LendOut.Controllers
{
  //  [Route("api/[controller]")]
    public class BooksController : Controller
    {
		private BooksCatalogue _catalogue;

		public BooksController()
		{
			_catalogue = new BooksCatalogue();
		}

		// GET: api/Books
		public JsonResult GetAllBooks()
		{
			var arr = _catalogue.GetAll();
			
			var sett = new JsonSerializerSettings()
			{
				Formatting = Formatting.Indented
			};		
				return new JsonResult(arr, sett);
			//return Json(arr, JsonRequestBehavior.AllowGet);
		//	return new JsonResult(arr);
		}
	}


	/*
	// GET: api/Books/id 
	// IHttpActionResult
	public Book GetBook(int id)
	{
		Book book = _catalogue.Get(id);

		if (book == null)
		{
			// !!!
			// !!!
			//	 throw new HttpResponseException(HttpStatusCode.NotFound);
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

		// !!!
		// !!!
		//var response = Request.CreateResponse(HttpStatusCode.Created, createdBook);
		//	response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = createdBook.Id }));

		//	return response;
		return new HttpResponseMessage();
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

		// !!!
		// !!!
		//var response = Request.CreateResponse(HttpStatusCode.OK, book);
		//response.Headers.Location = new Uri(Url.Link("DefaultApi", new { id = book.Id }));

		//return response;
		return new HttpResponseMessage();
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

		// !!!
		// !!!
		// HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.NoContent);
		// return response;

		return new HttpResponseMessage();
	}
*/

}
