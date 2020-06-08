using ClothesWebShop.Data.Enums;
using ClothesWebShop.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace ClothesWebShop.Data
{
    public class WebShopContext : DbContext
    {
        public WebShopContext(DbContextOptions<WebShopContext> options) : base(options) 
        { 
        
        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<Brand> Brands { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<PaymentMethod> PaymentMethods { get; set; }
        public DbSet<Address> Addresses { get; set; }
        public DbSet<Order> Orders { get;set; }
        public DbSet<ArticleOrder> ArticleOrders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var articles = new List<Article>()
            {
                new Article()
                {
                    Id = 1,
                    Name = "Shirt",
                    Size = Sizes.L,
                    Price = 22.5,
                    Description = "A plain shirt",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 5,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Article()
                {
                    Id = 2,
                    Name = "Shirt",
                    Size = Sizes.S,
                    Price = 22.5,
                    Description = "A plain shirt",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 5,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Article()
                {
                    Id = 3,
                    Name = "Shirt",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 10,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Article()
                {
                    Id = 4,
                    Name = "Shirt",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 10,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Article()
                {
                    Id = 5,
                    Name = "Shirt",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt",
                    Category = "Plain",
                    Color = "Green",
                    AmountAvailable = 10,
                    SaleReduction = 0,
                    BrandId = 1,
                },
                new Article()
                {
                    Id = 6,
                    Name = "Shirt",
                    Size = Sizes.XL,
                    Price = 22.5,
                    Description = "A plain shirt",
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
                    FirstName = "Josip",
                    LastName = "Koprcina",
                    Email = "e",
                    Username = "jkoprcina",
                    Password = "p"
                }
            };

            var paymentMethods = new List<PaymentMethod>()
            {
                new PaymentMethod()
                {
                    Id = 1,
                    HolderName = "JOSIP KOPRČINA",
                    Number = "2222-5555-4444-3333",
                    CVV = "000",
                    ExpirationDate = new DateTime(),
                    IsMainPaymentMethod = true,
                    UserId = 1
                },
                new PaymentMethod()
                {
                    Id = 2,
                    HolderName = "JOSIP",
                    Number = "1111-1111-1111-1111",
                    CVV = "111",
                    ExpirationDate = new DateTime(),
                    IsMainPaymentMethod = false,
                    UserId = 1
                },
                new PaymentMethod()
                {
                    Id = 3,
                    HolderName = "JOSIP KOPRČINA",
                    Number = "9999-8888-7777-6666",
                    CVV = "999",
                    ExpirationDate = new DateTime(),
                    IsMainPaymentMethod = false,
                    UserId = 1
                },
                new PaymentMethod()
                {
                    Id = 4,
                    HolderName = "JOSIP",
                    Number = "1111-2222-4444-8888",
                    CVV = "222",
                    ExpirationDate = new DateTime(),
                    IsMainPaymentMethod = false,
                    UserId = 1
                }
            };

            var addresses = new List<Address>()
            {
                new Address()
                {
                    Id = 1,
                    Name = "Tolstojeva",
                    Number = 43,
                    City = "Split",
                    Country = "Croatia",
                    PostalCode = "21000",
                    ContactNumber = "0995556666",
                    IsMainAddress = true,
                    UserId = 1
                },
                new Address()
                {
                    Id = 2,
                    Name = "Busiceva",
                    Number = 22,
                    City = "Zagreb",
                    Country = "Croatia",
                    PostalCode = "10000",
                    ContactNumber = "0998887776",
                    IsMainAddress = false,
                    UserId = 1
                },
                new Address()
                {
                    Id = 3,
                    Name = "Tolstojeva",
                    Number = 2,
                    City = "Split",
                    Country = "Croatia",
                    PostalCode = "21000",
                    ContactNumber = "0995556666",
                    IsMainAddress = false,
                    UserId = 1
                },
                new Address()
                {
                    Id = 4,
                    Name = "Busiceva",
                    Number = 1,
                    City = "Zagreb",
                    Country = "Croatia",
                    PostalCode = "10000",
                    ContactNumber = "0998887776",
                    IsMainAddress = false,
                    UserId = 1
                }
            };

            var brands = new List<Brand>()
            {
                new Brand()
                {
                    Id = 1,
                    Name = "Nike",
                }
            };

            modelBuilder.Entity<Article>().HasData(
                articles
            );

            modelBuilder.Entity<User>().HasData(
                users
            );

            modelBuilder.Entity<Brand>().HasData(
                brands
            );

            modelBuilder.Entity<Address>().HasData(
                addresses
            );

            modelBuilder.Entity<PaymentMethod>().HasData(
                paymentMethods
            );
        }
    }
}
