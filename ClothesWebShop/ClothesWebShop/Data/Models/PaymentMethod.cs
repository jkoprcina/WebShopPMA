using System;
using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class PaymentMethod
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required"),
            StringLength(50, MinimumLength = 3,
            ErrorMessage = "The name must be between 3 and 50 characters")]
        public string HolderName { get; set; }

        [Required]
        public string Number { get; set; }
        
        [Required]
        public string CVV { get; set; }
        
        [Required, DataType(DataType.DateTime, 
            ErrorMessage = "Expiration time must be in DateTime format")]
        public DateTime ExpirationDate { get; set; }
        
        [Required]
        public bool IsMainPaymentMethod { get; set; }

        [Required]
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
