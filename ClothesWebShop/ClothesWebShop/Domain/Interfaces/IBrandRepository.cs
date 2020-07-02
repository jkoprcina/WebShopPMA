using ClothesWebShop.Data.Models;
using System.Collections.Generic;

namespace ClothesWebShop.Domain.Interfaces
{
    public interface IBrandRepository
    {
        List<Brand> Get();
    }
}