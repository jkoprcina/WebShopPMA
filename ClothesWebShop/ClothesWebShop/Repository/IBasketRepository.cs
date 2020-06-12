using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Repository
{
    public interface IBasketRepository
    {
        int Add(Basket basket);
        int Delete(int basketId);
    }
}