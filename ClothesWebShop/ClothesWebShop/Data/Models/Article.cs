using ClothesWebShop.Data.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class Article
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required"),
            StringLength(50, MinimumLength = 3, 
            ErrorMessage = "The name must be between 3 and 50 characters")]
        public string Name { get; set; }

        [JsonConverter(typeof(StringEnumConverter))]
        public Sizes Size { get; set; }

        [Required(ErrorMessage = "Price is required"), 
            Range(double.Epsilon, double.MaxValue)]
        public double Price { get; set; }

        [Required(ErrorMessage = "Description is required"),
            StringLength(200, MinimumLength = 3,
            ErrorMessage = "The description must be between 3 and 200 characters")]
        public string Description { get; set; }
        public string Category { get; set; }
        public string Color { get; set; }

        [Required(ErrorMessage = "Amount available is required"),
            Range(0, int.MaxValue)]
        public int AmountAvailable { get; set; }
        public int SaleReduction { get; set; }

        [Required]
        public int BrandId { get; set; }
        public Brand Brand { get; set; }
        public ICollection<ArticleOrder> ArticleOrders { get; set; }
    }
}
