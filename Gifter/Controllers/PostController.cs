using System;
using Microsoft.AspNetCore.Mvc;
using Gifter.Repositories;
using Gifter.Models;

namespace Gifter.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }

        [HttpPost]
        public IActionResult Post(Post post)
        {
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, Post post)
        {
            if (id != post.Id)
            {
                return BadRequest();
            }

            _postRepository.Update(post);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postRepository.Delete(id);
            return NoContent();
        }

        //HttpGet refers to the RESTful method that refers to the path /GetWithComments
        [HttpGet("GetWithComments")]

        //Method called when directed to the URL path above
        public IActionResult GetWithComments()
        {
            // GetAllWithComments method called on the interface IPostRepository
            // the big returned result or object "posts" is stored in another variable again "posts"
            var posts = _postRepository.GetAllWithComments();
            //OK() is a big level abtraction from ASP.NET that allows us to see the result we just created
            return Ok(posts);
        }
    }
}




/*There are a couple of ways we might imagine getting a UserProfile object for a particular Post. Assuming we have a UserProfileRepository, we could do something like this in the PostController.

[HttpGet]
public IActionResult Get()
{
    var posts = _postRepository.GetAll();

    foreach (var post in posts)
    {
        post.UserProfile = _userProfileRepository.GetById(post.UserProfileId);
    }

    return Ok(posts);
}
That would work, but it would NOT be an approach.

Why not?

There are a couple reasons related to code readability to software design principles, but we're going to focus on another reason: Performance.

Limiting "Round Trips" to the Database
In this course we don't spend a lot of time talking about the performance of our software - how fast (or slow) our code is. In general it's best to get your code working before you worry about performance. And, frankly, just getting it working is hard enough when you're learning.

NOTE: Prematurely focusing on performance has famously been called an evil to which many software developers find themselves in danger of succumbing.

One area where it is appropriate to talk about performance is in regards to round trips to the database. A round trip to the database simply refers to the process of an application making a request for data, and then waiting for and receiving a response from the database.

This process takes time. A lot of time. In fact many apps spend most of their time waiting for data to come back from the database.

There's no avoiding going to the database for data. Sometimes we make one trip, sometimes we make several. This is just the nature of web development. But we should think about the trips we make to the database. We should be able to justify each one. And we should limit them when we can.*/