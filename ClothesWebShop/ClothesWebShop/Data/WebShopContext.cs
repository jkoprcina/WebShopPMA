using ClothesWebShop.Data.Models;
using ClothesWebShop.Data.Enums;
using Microsoft.EntityFrameworkCore;
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
        public DbSet<Buyer> Buyers { get; set; }
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
                    AmmountAvailable = 5,
                    SaleReduction = 0,
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
                    AmmountAvailable = 5,
                    SaleReduction = 0,
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
                    AmmountAvailable = 10,
                    SaleReduction = 0,
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
                    AmmountAvailable = 10,
                    SaleReduction = 0,
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
                    AmmountAvailable = 10,
                    SaleReduction = 0,
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
                    AmmountAvailable = 10,
                    SaleReduction = 0,
                }
            };

            modelBuilder.Entity<Article>().HasData(
                articles
            );
        }
    }
}
