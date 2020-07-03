using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using ClothesWebShop.Interfaces;
using System.Linq;

namespace ClothesWebShop.Repository
{
    public class ProductsInCartRepository : IProductsInCartRepository
    {
        private readonly WebShopContext _context;

        public ProductsInCartRepository(WebShopContext context)
        {
            _context = context;
        }

        private ProductInCart Get(int productId, int userId)
        { 
            return _context.ProductsInCart
                .FirstOrDefault(b => b.ProductId == productId && b.UserId == userId);
        }
        public int AddUpdate(ProductInCart newProductInCart)
        {
            var oldProductInCart = Get(newProductInCart.ProductId, newProductInCart.UserId);

            if (oldProductInCart == null)
                return Add(newProductInCart);
            else
                return Update(newProductInCart, oldProductInCart);
        }

        private int Add(ProductInCart newProductInCart)
        {
            _context.ProductsInCart.Add(newProductInCart);
            return _context.SaveChanges();
        }

        private int Update(ProductInCart productInCart, ProductInCart oldProductInCart)
        {
            oldProductInCart.AmountSelected = productInCart.AmountSelected;
            return _context.SaveChanges();
        }

        public int Delete(int id)
        {
            var productInCart = _context.ProductsInCart.FirstOrDefault(b => b.Id == id);
            if (productInCart == null)
                return 0;
            _context.ProductsInCart.Remove(productInCart);
            return _context.SaveChanges();
        }
    }
}
