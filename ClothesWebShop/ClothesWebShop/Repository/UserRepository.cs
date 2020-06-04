using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace ClothesWebShop.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly WebShopContext _context;

        public UserRepository(WebShopContext context)
        {
            _context = context;
        }

        public User GetByEmailAndPassword(string email, string password)
        {
            return _context.Users
                .Include(user => user.Addresses)
                .Include(user => user.PaymentMethods)
                .FirstOrDefault(user => user.Email == email && user.Password == password);
        }

        public User Create(User user)
        {
            if (ValidateUser(user))
            {
                _context.Users.Add(user);
                _context.SaveChanges();

                return GetByEmailAndPassword(user.Email, user.Password);
            }
            return null;
        }

        private bool ValidateUser(User user) 
        {
            return true;
        }
    }
}
