using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
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

        public int Add(ProductInCart productInCart)
        {
            var oldCart = _context.ProductsInCart
                .FirstOrDefault(b => b.ProductId == productInCart.ProductId && b.UserId == productInCart.UserId);

            if (oldCart == null)
            {
                _context.ProductsInCart.Add(productInCart);
                return _context.SaveChanges();
            }
            else 
            {
                oldCart.AmountSelected = productInCart.AmountSelected;
                return _context.SaveChanges();
            }
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
