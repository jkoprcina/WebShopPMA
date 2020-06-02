namespace ClothesWebShop.Data.Models
{
    public class Address
    {
        public int Id { get; set; }
        public int AddressNumber { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string ContactNumber { get; set; }
        public bool IsMainAddress { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
