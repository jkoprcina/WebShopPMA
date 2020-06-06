using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class ArticleOrder
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Amount is required"),
            Range(0, int.MaxValue)]
        public int Amount { get; set; }

        [Required(ErrorMessage = "Price is required"),
            Range(double.Epsilon, double.MaxValue)]
        public int Price { get; set; }

        [Required]
        public int ArticleId { get; set; }
        public Article Article { get; set; }

        [Required]
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}
