using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class Address
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Address number is required"),
            Range(0, int.MaxValue)]
        public int AddressNumber { get; set; }

        [Required(ErrorMessage = "City is required"),
            StringLength(50, MinimumLength = 3,
            ErrorMessage = "The name must be between 3 and 50 characters")]
        public string City { get; set; }

        [Required(ErrorMessage = "Country is required"),
            StringLength(50, MinimumLength = 3,
            ErrorMessage = "The name must be between 3 and 50 characters")]
        public string Country { get; set; }

        [Required(ErrorMessage = "Postal code is required"),
            StringLength(50, MinimumLength = 3,
            ErrorMessage = "The name must be between 3 and 50 characters")]
        public string PostalCode { get; set; }

        [Required(ErrorMessage = "Contact number is required"),
            StringLength(50, MinimumLength = 3,
            ErrorMessage = "The name must be between 3 and 50 characters")]
        public string ContactNumber { get; set; }

        [Required]
        public bool IsMainAddress { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
