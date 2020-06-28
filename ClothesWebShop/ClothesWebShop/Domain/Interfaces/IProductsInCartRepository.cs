using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Repository
{
    public interface IProductsInCartRepository
    {
        int Add(ProductInCart productInCart);
        int Delete(int id);
    }
}