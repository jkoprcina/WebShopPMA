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
        private readonly IProductRepository _productRepository;

        public OrderController(IOrderRepository orderRepository, IProductRepository productRepository)
        {
            _orderRepository = orderRepository;
            _productRepository = productRepository;
        }

        [HttpPost]
        public IActionResult Add(AddOrderModel addOrderModel)
        {
            var order = new Order()
            {
                UserId = addOrderModel.UserId,
                ProductId = addOrderModel.ProductId,
                Price = addOrderModel.Price,
                Amount = addOrderModel.AmountSelected,
                OrderDate = DateTime.Now,
                EstimatedDeliveryDate = DateTime.Now.AddMonths(1),
                IsDelivered = false,
            };

            var orderAdded = _orderRepository.Add(order);
            _productRepository.RemoveAmount(order.ProductId, order.Amount);

            if (orderAdded == 0)
            {
                return Forbid();
            }

            return Ok(orderAdded);
        }
    }
}