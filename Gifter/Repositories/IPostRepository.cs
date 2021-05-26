using Gifter.Models;
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

        List<Post> GetAllWithComments();
    }
}