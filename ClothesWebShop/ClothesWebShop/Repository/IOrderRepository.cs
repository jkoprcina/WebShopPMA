using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Repository
{
    public interface IOrderRepository
    {
        int Add(Order order);
    }
}