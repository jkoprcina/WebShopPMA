using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Repository
{
    public interface IBuyerRepository
    {
        Buyer GetByPasswordAndEmail(string email, string password);
    }
}