﻿// <auto-generated />
using System;
using ClothesWebShop.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ClothesWebShop.Migrations
{
    [DbContext(typeof(WebShopContext))]
    partial class WebShopContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ClothesWebShop.Data.Models.Brand", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("Brands");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "Nike"
                        },
                        new
                        {
                            Id = 2,
                            Name = "Addidas"
                        },
                        new
                        {
                            Id = 3,
                            Name = "Zoe"
                        });
                });

            modelBuilder.Entity("ClothesWebShop.Data.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Amount")
                        .HasColumnType("int");

                    b.Property<DateTime>("EstimatedDeliveryDate")
                        .HasColumnType("datetime2");

                    b.Property<bool>("IsDelivered")
                        .HasColumnType("bit");

                    b.Property<DateTime>("OrderDate")
                        .HasColumnType("datetime2");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("ClothesWebShop.Data.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AmountAvailable")
                        .HasColumnType("int");

                    b.Property<int>("BrandId")
                        .HasColumnType("int");

                    b.Property<string>("Category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Color")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(200)")
                        .HasMaxLength(200);

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)")
                        .HasMaxLength(50);

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("SaleReduction")
                        .HasColumnType("int");

                    b.Property<int>("Size")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("BrandId");

                    b.ToTable("Products");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AmountAvailable = 5,
                            BrandId = 1,
                            Category = "Plain",
                            Color = "Green",
                            Description = "A plain shirt 1",
                            Name = "Shirt 1",
                            Price = 22.5,
                            SaleReduction = 0,
                            Size = 3
                        },
                        new
                        {
                            Id = 2,
                            AmountAvailable = 5,
                            BrandId = 1,
                            Category = "Plain",
                            Color = "Green",
                            Description = "A plain shirt 2",
                            Name = "Shirt 2",
                            Price = 22.5,
                            SaleReduction = 0,
                            Size = 1
                        },
                        new
                        {
                            Id = 3,
                            AmountAvailable = 10,
                            BrandId = 1,
                            Category = "Plain",
                            Color = "Green",
                            Description = "A plain shirt 3",
                            Name = "Shirt 3",
                            Price = 22.5,
                            SaleReduction = 0,
                            Size = 4
                        },
                        new
                        {
                            Id = 4,
                            AmountAvailable = 10,
                            BrandId = 1,
                            Category = "Plain",
                            Color = "Green",
                            Description = "A plain shirt 4",
                            Name = "Shirt 4",
                            Price = 22.5,
                            SaleReduction = 0,
                            Size = 4
                        },
                        new
                        {
                            Id = 5,
                            AmountAvailable = 10,
                            BrandId = 1,
                            Category = "Plain",
                            Color = "Green",
                            Description = "A plain shirt 5",
                            Name = "Shirt 5",
                            Price = 22.5,
                            SaleReduction = 0,
                            Size = 4
                        },
                        new
                        {
                            Id = 6,
                            AmountAvailable = 10,
                            BrandId = 1,
                            Category = "Plain",
                            Color = "Green",
                            Description = "A plain shirt 6",
                            Name = "Shirt 6",
                            Price = 22.5,
                            SaleReduction = 0,
                            Size = 4
                        });
                });

            modelBuilder.Entity("ClothesWebShop.Data.Models.ProductInCart", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("AmountSelected")
                        .HasColumnType("int");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<int>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("ProductId");

                    b.HasIndex("UserId");

                    b.ToTable("ProductsInCart");
                });

            modelBuilder.Entity("ClothesWebShop.Data.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)")
                        .HasMaxLength(20);

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(20)")
                        .HasMaxLength(20);

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("nvarchar(25)")
                        .HasMaxLength(25);

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(25)")
                        .HasMaxLength(25);

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "admin@email.com",
                            FirstName = "Admin",
                            IsAdmin = true,
                            LastName = "Admin",
                            Password = "admin",
                            Username = "adminUsername"
                        },
                        new
                        {
                            Id = 2,
                            Email = "user@gmail.com",
                            FirstName = "User",
                            IsAdmin = false,
                            LastName = "User",
                            Password = "user",
                            Username = "userUsername"
                        });
                });

            modelBuilder.Entity("ClothesWebShop.Data.Models.Order", b =>
                {
                    b.HasOne("ClothesWebShop.Data.Models.Product", "Product")
                        .WithMany("Orders")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ClothesWebShop.Data.Models.User", "User")
                        .WithMany("Orders")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ClothesWebShop.Data.Models.Product", b =>
                {
                    b.HasOne("ClothesWebShop.Data.Models.Brand", "Brand")
                        .WithMany("Articles")
                        .HasForeignKey("BrandId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("ClothesWebShop.Data.Models.ProductInCart", b =>
                {
                    b.HasOne("ClothesWebShop.Data.Models.Product", "Product")
                        .WithMany("ProductInCart")
                        .HasForeignKey("ProductId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("ClothesWebShop.Data.Models.User", "User")
                        .WithMany("ProductsInCart")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
