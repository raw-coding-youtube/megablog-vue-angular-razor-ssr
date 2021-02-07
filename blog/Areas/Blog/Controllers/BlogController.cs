using System.Collections.Generic;
using System.Linq;
using blog.Areas.Blog.Data;
using blog.Areas.Blog.Models;
using Microsoft.AspNetCore.Mvc;

namespace blog.Areas.Blog.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogController : Controller
    {
        private AppDbContext _ctx;

        public BlogController(AppDbContext ctx)
        {
            _ctx = ctx;
        }

        [HttpGet]
        public IEnumerable<Post> GetPosts() => _ctx.Posts.ToList();

        [HttpGet("{id}")]
        public Post GetPost(int id) => _ctx.Posts.First(x => x.Id == id);
    }
}