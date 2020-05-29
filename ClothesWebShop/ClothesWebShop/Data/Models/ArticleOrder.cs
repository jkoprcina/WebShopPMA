namespace ClothesWebShop.Data.Models
{
    public class ArticleOrder
    {
        public int Id { get; set; }
        public int Ammount { get; set; }
        public int Price { get; set; }
        public int ArticleId { get; set; }
        public Article Article { get; set; }
        public int OrderId { get; set; }
        public Order Order { get; set; }
    }
}
