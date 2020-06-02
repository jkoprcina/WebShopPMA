using ClothesWebShop.Data.Models;
using ClothesWebShop.Repository;
using Microsoft.AspNetCore.Mvc;

namespace ClothesWebShop.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpGet]
        public IActionResult GetByEmailAndPassword(string password, string email)
        {
            var user = _userRepository.GetByEmailAndPassword(password, email);
            if (user == null)
            {
                return Forbid();
            }

            return Ok(user);
        }

        [HttpPost]
        public IActionResult Create([FromBody]User user)
        {
            var newUser = _userRepository.Create(user);
            if (newUser == null)
            {
                return Forbid();
            }

            return Ok(newUser);
        }
    }
}
