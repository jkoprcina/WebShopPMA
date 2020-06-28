using ClothesWebShop.Data.Models;
using System.Collections.Generic;

namespace ClothesWebShop.Repository
{
    public interface IProductRepository
    {
        List<Product> Get();

        Product GetById(int id);

        int Add(Product product);

        int Delete(int productId);
    }
}