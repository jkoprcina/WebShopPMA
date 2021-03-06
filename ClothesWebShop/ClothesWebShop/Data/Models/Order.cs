﻿using System;
using System.ComponentModel.DataAnnotations;

namespace ClothesWebShop.Data.Models
{
    public class Order
    {
        public int Id { get; set; }

        [Required, DataType(DataType.DateTime,
         ErrorMessage = "Order date must be in DateTime format")]
        public DateTime OrderDate { get; set; }

        [Required, DataType(DataType.DateTime,
         ErrorMessage = "Estimated delivery date must be in DateTime format")]
        public DateTime EstimatedDeliveryDate { get; set; }

        [Required(ErrorMessage = "Total price is required"),
            Range(double.Epsilon, double.MaxValue)]
        public double Price { get; set; }

        [Required]
        public bool IsDelivered { get; set; }

        [Required(ErrorMessage = "Amount available is required"),
            Range(0, int.MaxValue)]
        public int Amount { get; set; }


        [Required]
        public int UserId { get; set; }
        public User User { get;set; }

        [Required]
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
