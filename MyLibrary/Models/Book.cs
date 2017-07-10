using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace MyLibrary.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(245)]
        public string Titel { get; set; }

        [StringLength(50)]
        public string Author { get; set; }

        //optional
        public int AgeCategoryId { get; set; }
        public int CategoryId { get; set; }
    }
}