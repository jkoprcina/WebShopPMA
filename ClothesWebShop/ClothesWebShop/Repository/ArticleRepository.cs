using ClothesWebShop.Data;
using ClothesWebShop.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace ClothesWebShop.Repository
{
    public class ArticleRepository : IArticleRepository
    {
        private readonly WebShopContext _context;

        public ArticleRepository(WebShopContext context)
        {
            _context = context;
        }

        public List<Article> Get()
        {
            return _context.Articles.ToList();
        }

        public Article GetById(int id)
        {
            return _context.Articles.FirstOrDefault(a => a.Id == id);
        }
    }
}
