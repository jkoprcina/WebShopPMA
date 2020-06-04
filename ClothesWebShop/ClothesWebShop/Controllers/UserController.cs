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
        public IActionResult GetByEmailAndPassword(string email, string password)
        {
            var user = _userRepository.GetByEmailAndPassword(email, password);
            if (user == null)
            {
                return Forbid();
            }

            return Ok(user);
        }

        [HttpPost]
        public IActionResult Create(User user)
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
