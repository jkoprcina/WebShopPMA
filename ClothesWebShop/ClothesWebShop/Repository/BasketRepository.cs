using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using System.Linq;

namespace ClothesWebShop.Repository
{
    public class BasketRepository : IBasketRepository
    {
        private readonly WebShopContext _context;

        public BasketRepository(WebShopContext context)
        {
            _context = context;
        }

        public int Add(Basket basket)
        {
            var oldBasket = _context.Baskets
                .FirstOrDefault(b => b.ArticleId == basket.ArticleId && b.UserId == basket.UserId);

            if (oldBasket == null)
            {
                _context.Baskets.Add(basket);
                return _context.SaveChanges();
            }
            else 
            {
                oldBasket.AmountSelected = basket.AmountSelected;
                return _context.SaveChanges();
            }
        }

        public int Delete(int basketId)
        {
            var basket = _context.Baskets.FirstOrDefault(b => b.Id == basketId);
            if (basket == null)
                return 0;
            _context.Baskets.Remove(basket);
            return _context.SaveChanges();
        }
    }
}
