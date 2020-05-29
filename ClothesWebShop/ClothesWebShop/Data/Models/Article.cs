using ClothesWebShop.Data.Enums;
using System.Collections.Generic;

namespace ClothesWebShop.Data.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Sizes Size { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Color { get; set; }
        public int AmmountAvailable { get; set; }
        public int SaleReduction { get; set; }
        public ICollection<ArticleOrder> ArticleOrders { get; set; }
    }
}
