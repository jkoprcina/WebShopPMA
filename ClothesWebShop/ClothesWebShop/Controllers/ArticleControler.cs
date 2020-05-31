using ClothesWebShop.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ClothesWebShop.Controllers
{
    [ApiController]
    [Route("api/articles")]
    public class ArticleController : ControllerBase
    {
        private readonly IArticleRepository _articleRepository;
        public ArticleController(IArticleRepository articleRepository)
        {
            _articleRepository = articleRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_articleRepository.Get()); 
        }

        [HttpGet("get-by-id")]
        public IActionResult GetById(int id)
        {
            var article = _articleRepository.GetById(id);
            if (article == null) 
            { 
                return Forbid(); 
            }

            return Ok(article);
        }
    }
}
