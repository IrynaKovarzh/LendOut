using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace MyLibrary.Models
{
	[JsonObject(MemberSerialization.OptOut)]
	public class Book
    {
		#region Constructor
		public Book()
		{
		}
		#endregion Constructor

		[Key]
        public int Id { get; set; }

        [Required]
        [StringLength(245)]
        public string Title { get; set; }

        [StringLength(50)]
        public string Author { get; set; }

        //optional
        public int AgeCategoryId { get; set; }
        public int CategoryId { get; set; }
    }
}