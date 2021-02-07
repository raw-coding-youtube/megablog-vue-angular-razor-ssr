using blog.Areas.Blog.Data;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;

namespace vue_blog
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var Host = CreateWebHostBuilder(args).Build();
            using (var scope = Host.Services.CreateScope())
            {
                SeedDatabase.Init(scope);
            }
            Host.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseUrls("http://localhost:5050")
                .UseStartup<Startup>();
    }
}
