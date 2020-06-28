using ClothesWebShop.Data.Models;
using ClothesWebShop.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ClothesWebShop.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        public ProductController(IProductRepository productRepository)
        {
            _productRepository = productRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_productRepository.Get()); 
        }

        [HttpGet("get-by-id")]
        public IActionResult GetById(int id)
        {
            var product = _productRepository.GetById(id);
            if (product == null) 
            { 
                return Forbid(); 
            }

            return Ok(product);
        }

        [HttpPost]
        public IActionResult Add(Product product)
        {
            var newProduct = _productRepository.Add(product);
            if (newProduct == 0)
            {
                return Forbid();
            }

            return Ok(newProduct);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            var result = _productRepository.Delete(id);
            if (result == 0)
                return Forbid();
            else
                return Ok();
        }
    }
}
