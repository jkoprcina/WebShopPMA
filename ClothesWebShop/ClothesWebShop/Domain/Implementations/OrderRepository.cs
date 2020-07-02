using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using ClothesWebShop.Interfaces;

namespace ClothesWebShop.Repository
{
    public class OrderRepository : IOrderRepository
    {
        private readonly WebShopContext _context;

        public OrderRepository(WebShopContext context)
        {
            _context = context;
        }

        public int Add(Order order)
        {
            if (order != null) {
                _context.Add(order); 
            }
            return _context.SaveChanges();
        }
    }
}
