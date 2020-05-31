using ClothesWebShop.Data.Models;
using System.Collections.Generic;

namespace ClothesWebShop.Repository
{
    public interface IArticleRepository
    {
        List<Article> Get();

        Article GetById(int id);
    }
}