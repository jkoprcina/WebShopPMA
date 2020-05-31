using ClothesWebShop.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ClothesWebShop.Controllers
{
    [ApiController]
    [Route("api/buyers")]
    public class BuyerController : ControllerBase
    {
        private readonly IBuyerRepository _buyerRepository;
        public BuyerController(IBuyerRepository buyerRepository)
        {
            _buyerRepository = buyerRepository;
        }

        [HttpGet]
        public IActionResult GetByPasswordAndEmail(string password, string email)
        {
            var buyer = _buyerRepository.GetByPasswordAndEmail(password, email);
            if (buyer == null)
            {
                return Forbid();
            }

            return Ok(buyer);
        }
    }
}
