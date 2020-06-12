namespace ClothesWebShop.Data.Dto
{
    public class AddOrder
    {
        public double Price { get; set; }   
        public int AmountSelected { get; set; }
        public int UserId { get; set; }
        public int ArticleId { get; set; }
    }
}
