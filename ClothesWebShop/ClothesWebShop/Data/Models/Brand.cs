using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class Brand
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required"),
            StringLength(50, MinimumLength = 3,
            ErrorMessage = "The name must be between 3 and 50 characters")]
        public string Name { get; set; }

        public ICollection<Product> Articles { get; set; }
    }
}
