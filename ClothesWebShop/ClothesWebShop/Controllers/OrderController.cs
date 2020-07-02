using ClothesWebShop.Data.Dto;
using ClothesWebShop.Data.Models;
using ClothesWebShop.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;

namespace ClothesWebShop.Controllers
{
    [Route("api/orders")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;
        public OrderController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        [HttpPost]
        public IActionResult Create(AddProductToCart addOrder)
        {
            var order = new Order()
            {
                UserId = addOrder.UserId,
                ProductId = addOrder.ProductId,
                Price = addOrder.Price,
                Amount = addOrder.AmountSelected,
                OrderDate = DateTime.Now,
                EstimatedDeliveryDate = DateTime.Now.AddMonths(1),
                IsDelivered = false,
            };
            var orderAdded = _orderRepository.Add(order);
            if (orderAdded == 0)
            {
                return Forbid();
            }

            return Ok(orderAdded);
        }
    }
}