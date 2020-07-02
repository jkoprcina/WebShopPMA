using ClothesWebShop.Data.Models;
using ClothesWebShop.Interfaces;
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

        [HttpGet("by-id")]
        public IActionResult GetByEmailAndPassword(int id)
        {
            var user = _userRepository.GetById(id);
            if (user == null)
            {
                return Forbid();
            }

            return Ok(user);
        }

        [HttpGet("by-username-password")]
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
        public IActionResult Add(User user)
        {
            var newUser = _userRepository.Add(user);
            if (newUser == null)
            {
                return Forbid();
            }

            return Ok(newUser);
        }
    }
}
