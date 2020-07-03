namespace ClothesWebShop.Data.Dto
{
    public class AddOrderModel
    {
        public double Price { get; set; }   
        public int AmountSelected { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
    }
}
