using Microsoft.AspNetCore.Mvc;

namespace vue_blog.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();
    }
}