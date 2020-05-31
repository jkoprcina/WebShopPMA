using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using System.Linq;

namespace ClothesWebShop.Repository
{
    public class BuyerRepository : IBuyerRepository
    {
        private readonly WebShopContext _context;

        public BuyerRepository(WebShopContext context)
        {
            _context = context;
        }

        public Buyer GetByPasswordAndEmail(string password, string email)
        {
            return _context.Buyers.FirstOrDefault(a => a.Password == password && a.Email == email);
        }
    }
}
