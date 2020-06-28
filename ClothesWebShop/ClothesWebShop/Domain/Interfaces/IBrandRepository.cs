using ClothesWebShop.Data.Models;
using System.Collections.Generic;

namespace ClothesWebShop.Domain.Implementations
{
    public interface IBrandRepository
    {
        List<Brand> Get();
    }
}