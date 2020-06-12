using ClothesWebShop.Data.Models;
using ClothesWebShop.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ClothesWebShop.Controllers
{
    [Route("api/baskets")]
    [ApiController]
    public class BasketController : ControllerBase
    {
        private readonly IBasketRepository _basketRepository;
        public BasketController(IBasketRepository basketRepository)
        {
            _basketRepository = basketRepository;
        }

        [HttpPost("add")]
        public IActionResult Add(Basket basket)
        {
            return Ok(_basketRepository.Add(basket));
        }

        [HttpDelete("delete")]
        public IActionResult Delete(int basketId)
        {
            var result = _basketRepository.Delete(basketId);
            if (result == 0)
                return NotFound();
            else
                return Ok();
        }
        
    }
    
}