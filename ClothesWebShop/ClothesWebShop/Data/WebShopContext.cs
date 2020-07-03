using ClothesWebShop.Data.Enums;
using ClothesWebShop.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace ClothesWebShop.Data
{
    public class WebShopContext : DbContext
    {
        public WebShopContext(DbContextOptions<WebShopContext> options) : base(options) 
        { 
        
        }

        public DbSet<Product> Products { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Order> Orders { get;set; }
        public DbSet<ProductInCart> ProductsInCart { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var products = new List<Product>()
            {
                new Product()
                {
                    Id = 1,
                    Name = "Shirt 1",
                    Size = Sizes.L,
                    Price = 22.5,
                    Description = "A plain shirt 1",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 5,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Product()
                {
                    Id = 2,
                    Name = "Shirt 2",
                    Size = Sizes.S,
                    Price = 22.5,
                    Description = "A plain shirt 2",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 5,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Product()
                {
                    Id = 3,
                    Name = "Shirt 3",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt 3",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 10,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Product()
                {
                    Id = 4,
                    Name = "Shirt 4",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt 4",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 10,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Product()
                {
                    Id = 5,
                    Name = "Shirt 5",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt 5",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 10,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Product()
                {
                    Id = 6,
                    Name = "Shirt 6",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt 6",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 10,
                    SaleReduction = 0,
                    BrandId = 1,
                }
            };

            var users = new List<User>()
            {
                new User()
                {
                    Id = 1,
                    FirstName = "Admin",
                    LastName = "Admin",
                    Email = "admin@email.com",
                    Username = "adminUsername",
                    Password = "admin",
                    IsAdmin = true
                },
                new User()
                {
                    Id = 2,
                    FirstName = "User",
                    LastName = "User",
                    Email = "user@gmail.com",
                    Username = "userUsername",
                    Password = "user",
                    IsAdmin = false
                }
            };

            var brands = new List<Brand>()
            {
                new Brand()
                {
                    Id = 1,
                    Name = "Nike",
                },
                 new Brand()
                {
                    Id = 2,
                    Name = "Addidas",
                },
                new Brand()
                {
                    Id = 3,
                    Name = "Zoe",
                }
            };

            modelBuilder.Entity<Product>().HasData(
                products
            );

            modelBuilder.Entity<User>().HasData(
                users
            );

            modelBuilder.Entity<Brand>().HasData(
                brands
            );
        }
    }
}
