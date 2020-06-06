using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "First name is required"),
            StringLength(20, MinimumLength = 3,
            ErrorMessage = "The first name must longer than 3 characters")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last name is required"),
            StringLength(20, MinimumLength = 3,
            ErrorMessage = "The last name must longer than 3 characters")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email is required"),
            DataType(DataType.EmailAddress),
            EmailAddress(ErrorMessage = "Email must be in the correct format")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Username is required"),
            StringLength(25, MinimumLength = 3,
            ErrorMessage = "The username must be between 3 and 25 characters"),
            RegularExpression("^[a-z0-9_-]{3,25}$",
            ErrorMessage = "The username is in the wrong format")]
        public string Username { get; set; }

        [Required(ErrorMessage = "Password is required"),
            DataType(DataType.Password),
            StringLength(25, MinimumLength = 8,
            ErrorMessage = "The password must longer than 8 characters"),
            RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$",
            ErrorMessage = "Password must have minimum eight characters, at least one uppercase letter, one lowercase letter and one number")]
        public string Password { get; set; }

        public ICollection<Address> Addresses { get; set; }
        public ICollection<PaymentMethod> PaymentMethods { get; set; }
    }
}
