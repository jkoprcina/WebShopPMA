﻿using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace ClothesWebShop.Repository
{
    public class ProductRepository : IProductRepository
    {
        private readonly WebShopContext _context;

        public ProductRepository(WebShopContext context)
        {
            _context = context;
        }

        public List<Product> Get()
        {
            return _context.Products.ToList();
        }

        public Product GetById(int id)
        {
            return _context.Products.FirstOrDefault(product => product.Id == id);
        }

        public int Add(Product product)
        {
            _context.Products.Add(product);
            return _context.SaveChanges();
        }

        public int Delete(int id)
        {
            var productToRemove = _context.Products
                .Include(product => product.ProductInCart)
                .Include(product => product.Orders)
                .FirstOrDefault(product => product.Id == id);

            if (productToRemove == null)
                return 0;

            else if (productToRemove.ProductInCart.Count > 0 || productToRemove.Orders.Count > 0)
                return 0;

            _context.Products.Remove(productToRemove);
            return _context.SaveChanges();
        }
    }
}
