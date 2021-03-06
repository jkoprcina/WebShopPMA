﻿using ClothesWebShop.Data.Models;

namespace ClothesWebShop.Interfaces
{
    public interface IUserRepository
    {
        User GetById(int id);
        User GetByEmailAndPassword(string email, string password);
        User Add(User user);
    }
}