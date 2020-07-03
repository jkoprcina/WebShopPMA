using ClothesWebShop.Data.Models;
using System.Collections.Generic;

namespace ClothesWebShop.Interfaces
{
    public interface IProductRepository
    {
        List<Product> Get();

        Product GetById(int id);

        int Add(Product product);

        Product Update(Product product);

        int RemoveAmount(int productId, int amountToRemove);

        int Delete(int productId);
    }
}