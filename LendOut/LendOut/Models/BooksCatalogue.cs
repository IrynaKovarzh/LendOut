using System.Collections.Generic;
using System.Linq;

namespace LendOut.Models
{
    public class BooksCatalogue
    {
        private static object _inlock = new object(); // ???

        private IList<Book> data = new List<Book> {
            new Book {
               Id = 1, Titel = "ABC-boken", Author = "Author ABC", AgeCategoryId = 1, CategoryId = 2},
             new Book {
               Id = 2, Titel = "ABC2-boken", Author = "Author2 ABC", AgeCategoryId = 2, CategoryId = 2}
        };
        
        public IEnumerable<Book> GetAll(){            
                return data;     // Values, without keys?l
        }

        public Book Get(int id)
        {
            return data.Where(r => r.Id == id).FirstOrDefault();      
            //...OrDefault: The default value for reference and nullable types is null. Or to specify DefaultIfEmpty<TSource> ...
        }
        
        public Book Add(Book book)
        {
            if (book != null)
            {
             lock (_inlock)
            {
                int index = data.Count();
                book.Id = index + 1;

                data.Add(book); 
             }
           }
            return book;
        }

        public bool Update(int id, Book book)
        {
            bool isSuccess = false;
            if (book != null)
            {
                lock (_inlock)
                {
                    int index = data.ToList().FindIndex(e => e.Id == id);   // Get - ?
                    if (book != null)
                    {
                        book.Id = id;
                        data[index] = book;
                        isSuccess = true;
                    }
                }
            }
            return isSuccess;
        }

        public bool Delete (int id)
        {
            bool isSuccess = false;
            lock (_inlock)
             {
            Book book = data.Where(r => r.Id == id).First();
                if (book != null)
                {
                data.Remove(book);
                isSuccess = true;
                }
            }
            return isSuccess;
        }

    }

    public class AgeCategories
    {
            private static string[] AgeCategoriesList = new string[5] {"0-1", "1-3", "4-5", "6-7", "8-"};
    }

    public class Categories
    {
        private static string[] CategoriesList = new string[2] { "For teacher", "Literature"};
    }

 }
