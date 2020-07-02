using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using ClothesWebShop.Interfaces;

namespace ClothesWebShop.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly WebShopContext _context;

        public UserRepository(WebShopContext context)
        {
            _context = context;
        }

        public User GetById(int id)
        {
            return _context.Users
                .Include(user => user.ProductsInCart)
                    .ThenInclude(productInCart => productInCart.Product)
                .FirstOrDefault(user => user.Id == id);

        }
        public User GetByEmailAndPassword(string email, string password)
        {
            return _context.Users
                .Include(user => user.ProductsInCart)
                    .ThenInclude(productInCart => productInCart.Product)
                .FirstOrDefault(user => user.Email == email && user.Password == password);
        }

        public User Add(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();

            return GetByEmailAndPassword(user.Email, user.Password);
        }

    }
}
