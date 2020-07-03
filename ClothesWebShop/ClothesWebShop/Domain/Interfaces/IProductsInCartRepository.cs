using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Interfaces
{
    public interface IProductsInCartRepository
    {
        int AddUpdate(ProductInCart productInCart);
        int Delete(int id);
    }
}