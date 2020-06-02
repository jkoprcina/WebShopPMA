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

        public int UserId { get; set; }
        public User User { get;set; }
        public ICollection<ArticleOrder> ArticleOrders { get; set; }
    }
}
