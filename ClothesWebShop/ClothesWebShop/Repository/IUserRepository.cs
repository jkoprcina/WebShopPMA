using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Repository
{
    public interface IUserRepository
    {
        User GetById(int id);
        User GetByEmailAndPassword(string email, string password);
        User Create(User user);
        bool AddArticleToBasket(Article article, int userId);
    }
}