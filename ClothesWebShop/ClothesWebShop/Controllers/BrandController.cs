using ClothesWebShop.Domain.Implementations;
using Microsoft.AspNetCore.Mvc;

namespace ClothesWebShop.Controllers
{
    [Route("api/brands")]
    [ApiController]
    public class BrandController : ControllerBase
    {
        private readonly IBrandRepository _brandRepository;
        public BrandController(IBrandRepository brandRepository)
        {
            _brandRepository = brandRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_brandRepository.Get());
        }
    }
}