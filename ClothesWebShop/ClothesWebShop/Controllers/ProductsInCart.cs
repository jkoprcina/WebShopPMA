using ClothesWebShop.Data.Models;
using ClothesWebShop.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ClothesWebShop.Controllers
{
    [Route("api/cart")]
    [ApiController]
    public class ProductsInCartController : ControllerBase
    {
        private readonly IProductsInCartRepository _productsInCartRepository;
        public ProductsInCartController(IProductsInCartRepository productsInCartRepository)
        {
            _productsInCartRepository = productsInCartRepository;
        }

        [HttpPost("add")]
        public IActionResult Add(ProductInCart productInCart)
        {
            return Ok(_productsInCartRepository.Add(productInCart));
        }

        [HttpDelete("delete")]
        public IActionResult Delete(int id)
        {
            var result = _productsInCartRepository.Delete(id);
            if (result == 0)
                return NotFound();
            else
                return Ok();
        }
        
    }
    
}