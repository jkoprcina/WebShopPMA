using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class ProductInCart
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Total price is required"),
            Range(double.Epsilon, double.MaxValue)]
        public double Price { get; set; }

        [Required(ErrorMessage = "Amount available is required"),
            Range(0, int.MaxValue)]
        public int AmountSelected { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
