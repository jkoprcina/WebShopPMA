using System;
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
                    Password = table.Column<string>(maxLength: 25, nullable: false),
                    IsAdmin = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
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
                    table.PrimaryKey("PK_Products", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Products_Brands_BrandId",
                        column: x => x.BrandId,
                        principalTable: "Brands",
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
                    Price = table.Column<double>(nullable: false),
                    IsDelivered = table.Column<bool>(nullable: false),
                    Amount = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Orders_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Orders_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ProductsInCart",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Price = table.Column<double>(nullable: false),
                    AmountSelected = table.Column<int>(nullable: false),
                    UserId = table.Column<int>(nullable: false),
                    ProductId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ProductsInCart", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ProductsInCart_Products_ProductId",
                        column: x => x.ProductId,
                        principalTable: "Products",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ProductsInCart_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Brands",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Nike" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "IsAdmin", "LastName", "Password", "Username" },
                values: new object[] { 1, "admin@email.com", "Admin", true, "Admin", "admin", "adminUsername" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Email", "FirstName", "IsAdmin", "LastName", "Password", "Username" },
                values: new object[] { 2, "user@gmail.com", "User", false, "User", "user", "userUsername" });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "AmountAvailable", "BrandId", "Category", "Color", "Description", "Name", "Price", "SaleReduction", "Size" },
                values: new object[,]
                {
                    { 1, 5, 1, "Plain", "Green", "A plain shirt 1", "Shirt 1", 22.5, 0, 3 },
                    { 2, 5, 1, "Plain", "Green", "A plain shirt 2", "Shirt 2", 22.5, 0, 1 },
                    { 3, 10, 1, "Plain", "Green", "A plain shirt 3", "Shirt 3", 22.5, 0, 4 },
                    { 4, 10, 1, "Plain", "Green", "A plain shirt 4", "Shirt 4", 22.5, 0, 4 },
                    { 5, 10, 1, "Plain", "Green", "A plain shirt 5", "Shirt 5", 22.5, 0, 4 },
                    { 6, 10, 1, "Plain", "Green", "A plain shirt 6", "Shirt 6", 22.5, 0, 4 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Orders_ProductId",
                table: "Orders",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_UserId",
                table: "Orders",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Products_BrandId",
                table: "Products",
                column: "BrandId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductsInCart_ProductId",
                table: "ProductsInCart",
                column: "ProductId");

            migrationBuilder.CreateIndex(
                name: "IX_ProductsInCart_UserId",
                table: "ProductsInCart",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "ProductsInCart");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Brands");
        }
    }
}
