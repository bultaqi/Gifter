using Gifter.Models;
using System;
using System.Collections.Generic;

namespace Gifter.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        public Post GetById(int id);
        void Add(Post post);
        void Update(Post post);
        void Delete(int id);
        
        // The interface defines the method for the repository here
        List<Post> GetAllWithComments();
        List<Post> Search(string criterion, bool sortDescending);
        List<Post> Hottest(DateTime since, bool sortDescending);
    }
}