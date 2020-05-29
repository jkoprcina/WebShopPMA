using System;
using System.Collections.Generic;

namespace ClothesWebShop.Data.Models
{
    public class Order
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public DateTime EstimatedDeliveryDate { get; set; }
        public double TotalPrice { get; set; }
        public bool IsDelivered { get; set; }

        public int BuyerId { get; set; }
        public Buyer Buyer { get;set; }
        public ICollection<ArticleOrder> ArticleOrders { get; set; }
    }
}
