using System;
using blog.Areas.Blog.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;

namespace Microsoft.Extensions.DependencyInjection
{
    public static class ServiceRegistrar
    {
        public static void AddBlog(this IServiceCollection services, string connection)
        {
            services.AddDbContext<AppDbContext>(options =>
                        {
                            options.UseSqlServer(connection);
                        });

            services.AddIdentity<IdentityUser, IdentityRole>(options =>
            {
                options.Password.RequireDigit = false;
                options.Password.RequireNonAlphanumeric = false;
                options.Password.RequireUppercase = false;
                options.Password.RequiredLength = 6;
            })
                .AddEntityFrameworkStores<AppDbContext>();

            services.AddMvc();
        }

        public static void UseBlog(this IApplicationBuilder app) {
            app.UseBlog(null);
        }

        public static void UseBlog(this IApplicationBuilder app, Action<IRouteBuilder> routeBuilder)
        {
            app.UseAuthentication();

            if (routeBuilder == null)
            {
                app.UseMvcWithDefaultRoute();
            }
            else
            {
                app.UseMvc(routeBuilder);
            }
        }
    }
}