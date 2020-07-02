using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Interfaces
{
    public interface IProductsInCartRepository
    {
        int Add(ProductInCart productInCart);
        int Delete(int id);
    }
}