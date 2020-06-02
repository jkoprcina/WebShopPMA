using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Repository
{
    public interface IUserRepository
    {
        User GetByEmailAndPassword(string email, string password);
        User Create(User user);
    }
}