using System.Collections.Generic;
using LendOut.Models;
using Microsoft.AspNetCore.Mvc;

namespace LendOut.Controllers
{
    [Route("api/[controller]")]
    public class BooksController : Controller
    {
        private readonly BooksCatalogue _catalogue;

        public BooksController()
        {
            _catalogue = new BooksCatalogue();
        }
        // GET api/values
        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _catalogue.GetAll();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult GetBook(int id)
        {
            Book book = _catalogue.Get(id);

            if (book == null)
            {
                return NotFound();
            }
            return Ok(book);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Book book)
        {

            if (book == null)
            {
                return BadRequest();
                // HttpResponseMessage response = Request.CreateErrorResponse;  
            }

            var createdBook = _catalogue.Add(book);   //.Conflict in case Add is not successful

            return CreatedAtAction(nameof(GetBook), new { id = createdBook.Id });
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Book book)
        {
            bool isSuccess = _catalogue.Update(id, book);

            if (!isSuccess)
            {
                return BadRequest();
            }

            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            bool isSuccess = _catalogue.Delete(id);

            if (!isSuccess)
            {
                return NotFound();
            }
            return NoContent();
        }
    }
}
