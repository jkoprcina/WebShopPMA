using System;

namespace ClothesWebShop.Data.Models
{
    public class PaymentMethod
    {
        public string Id { get; set; }
        public string HolderName { get; set; }
        public string Number { get; set; }
        public string CVV { get; set; }
        public DateTime ExpirationDate { get; set; }
        public bool IsMainPaymentMethod { get; set; }
        
        public int BuyerId { get; set; }
        public Buyer Buyer { get; set; }
    }
}
