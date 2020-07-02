using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Interfaces
{
    public interface IOrderRepository
    {
        int Add(Order order);
    }
}