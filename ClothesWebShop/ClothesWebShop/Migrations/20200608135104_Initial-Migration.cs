﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ClothesWebShop.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Brands",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brands", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(maxLength: 20, nullable: false),
                    LastName = table.Column<string>(maxLength: 20, nullable: false),
                    Email = table.Column<string>(nullable: false),
                    Username = table.Column<string>(maxLength: 25, nullable: false),
                    Password = table.Column<string>(maxLength: 25, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Articles",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Size = table.Column<int>(nullable: false),
                    Price = table.Column<double>(nullable: false),
                    Description = table.Column<string>(maxLength: 200, nullable: false),
                    Category = table.Column<string>(nullable: true),
                    Color = table.Column<string>(nullable: true),
                    AmountAvailable = table.Column<int>(nullable: false),
                    SaleReduction = table.Column<int>(nullable: false),
                    BrandId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Articles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Articles_Brands_BrandId",
                        column: x => x.BrandId,
                        principalTable: "Brands",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Addresses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    Number = table.Column<int>(nullable: false),
                    City = table.Column<string>(maxLength: 50, nullable: false),
                    Country = table.Column<string>(maxLength: 50, nullable: false),
                    PostalCode = table.Column<string>(maxLength: 50, nullable: false),
                    ContactNumber = table.Column<string>(maxLength: 50, nullable: false),
                    IsMainAddress = table.Column<bool>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Addresses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Addresses_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    OrderDate = table.Column<DateTime>(nullable: false),
                    EstimatedDeliveryDate = table.Column<DateTime>(nullable: false),
                    TotalPrice = table.Column<double>(nullable: false),
                    IsDelivered = table.Column<bool>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "PaymentMethods",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HolderName = table.Column<string>(maxLength: 50, nullable: false),
                    Number = table.Column<string>(nullable: false),
                    CVV = table.Column<string>(nullable: false),
                    ExpirationDate = table.Column<DateTime>(nullable: false),
                    IsMainPaymentMethod = table.Column<bool>(nullable: false),
                    UserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PaymentMethods", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PaymentMethods_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ArticleOrders",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Amount = table.Column<int>(nullable: false),
                    Price = table.Column<int>(nullable: false),
                    ArticleId = table.Column<int>(nullable: false),
                    OrderId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ArticleOrders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ArticleOrders_Articles_ArticleId",
                        column: x => x.ArticleId,
                        principalTable: "Articles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ArticleOrders_Orders_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Orders",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Brands",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Nike" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "LastName", "Password", "Username" },
                values: new object[] { 1, "e", "Josip", "Koprcina", "p", "jkoprcina" });

            migrationBuilder.InsertData(
                table: "Addresses",
                columns: new[] { "Id", "City", "ContactNumber", "Country", "IsMainAddress", "Name", "Number", "PostalCode", "UserId" },
                values: new object[,]
                {
                    { 1, "Split", "0995556666", "Croatia", true, "Tolstojeva", 43, "21000", 1 },
                    { 2, "Zagreb", "0998887776", "Croatia", false, "Busiceva", 22, "10000", 1 },
                    { 3, "Split", "0995556666", "Croatia", false, "Tolstojeva", 2, "21000", 1 },
                    { 4, "Zagreb", "0998887776", "Croatia", false, "Busiceva", 1, "10000", 1 }
                });

            migrationBuilder.InsertData(
                table: "Articles",
                columns: new[] { "Id", "AmountAvailable", "BrandId", "Category", "Color", "Description", "Name", "Price", "SaleReduction", "Size" },
                values: new object[,]
                {
                    { 1, 5, 1, "Plain", "Green", "A plain shirt", "Shirt", 22.5, 0, 3 },
                    { 2, 5, 1, "Plain", "Green", "A plain shirt", "Shirt", 22.5, 0, 1 },
                    { 3, 10, 1, "Plain", "Green", "A plain shirt", "Shirt", 22.5, 0, 4 },
                    { 4, 10, 1, "Plain", "Green", "A plain shirt", "Shirt", 22.5, 0, 4 },
                    { 5, 10, 1, "Plain", "Green", "A plain shirt", "Shirt", 22.5, 0, 4 },
                    { 6, 10, 1, "Plain", "Green", "A plain shirt", "Shirt", 22.5, 0, 4 }
                });

            migrationBuilder.InsertData(
                table: "PaymentMethods",
                columns: new[] { "Id", "CVV", "ExpirationDate", "HolderName", "IsMainPaymentMethod", "Number", "UserId" },
                values: new object[,]
                {
                    { 1, "000", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "JOSIP KOPRČINA", true, "2222-5555-4444-3333", 1 },
                    { 2, "111", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "JOSIP", false, "1111-1111-1111-1111", 1 },
                    { 3, "999", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "JOSIP KOPRČINA", false, "9999-8888-7777-6666", 1 },
                    { 4, "222", new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "JOSIP", false, "1111-2222-4444-8888", 1 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Addresses_UserId",
                table: "Addresses",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_ArticleOrders_ArticleId",
                table: "ArticleOrders",
                column: "ArticleId");

            migrationBuilder.CreateIndex(
                name: "IX_ArticleOrders_OrderId",
                table: "ArticleOrders",
                column: "OrderId");

            migrationBuilder.CreateIndex(
                name: "IX_Articles_BrandId",
                table: "Articles",
                column: "BrandId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_PaymentMethods_UserId",
                table: "PaymentMethods",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Addresses");

            migrationBuilder.DropTable(
                name: "ArticleOrders");

            migrationBuilder.DropTable(
                name: "PaymentMethods");

            migrationBuilder.DropTable(
                name: "Articles");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Brands");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
