using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;

namespace blog.Areas.Blog.Data
{
    public class SeedDatabase
    {
        public static void Init(IServiceScope scope)
        {
            var ctx = scope.ServiceProvider.GetRequiredService<AppDbContext>();

            if (!ctx.Users.Any())
            {
                var userMgr = scope.ServiceProvider
                    .GetRequiredService<UserManager<IdentityUser>>();

                var admin = new IdentityUser
                {
                    UserName = "admin"
                };

                userMgr.CreateAsync(admin, "password").GetAwaiter().GetResult();
            }
        }
    }
}