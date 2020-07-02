using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using ClothesWebShop.Domain.Interfaces;
using System.Collections.Generic;
using System.Linq;

namespace ClothesWebShop.Domain.Implementations
{
    public class BrandRepository : IBrandRepository
    {
        private readonly WebShopContext _context;

        public BrandRepository(WebShopContext context)
        {
            _context = context;
        }

        public List<Brand> Get()
        {
            return _context.Brands.ToList();
        }
    }
}
