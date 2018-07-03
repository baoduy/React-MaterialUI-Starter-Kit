using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;

namespace Web
{
    public class Startup
    {
        public const string _reservedProxyUrl = "/ReactJs/Web";
        //Uncomment this incase you use it.
        //public Startup(IConfiguration configuration)
        //{
        //    Configuration = configuration;
        //}

        //public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            //Enable Compress
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
            services.AddResponseCompression(options =>
            {
                options.EnableForHttps = true;

                options.MimeTypes = new[]
                {
                    // Default
                    "text/plain",
                    "text/css",
                    "application/javascript",
                    "text/html",
                    "application/xml",
                    "text/xml",
                    "application/json",
                    "text/json",
                    // Custom
                    "image/svg+xml"
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            //Enable Compress
            app.UseResponseCompression();

            //app.UseDefaultFiles();
            app.UseStaticFiles(new StaticFileOptions
            {
                //Apply Cache for Static Files
                OnPrepareResponse = ctx =>
                    ctx.Context.Response.Headers.Append("Cache-Control", $"public,max-age={new TimeSpan(7, 0, 0, 0).TotalSeconds}")
            });

            //Enable Reserved Proxy - handle transform
            app.Use(async (context, next) =>
            {
                //Apply the Preserved Proxy if accessing by the Service Fabric Reserved Proxy
                if (context.Request.Headers.TryGetValue("X-Forwarded-Host", out var url) && url.ToString().Contains("19081"))
                    context.Request.PathBase = _reservedProxyUrl;

                await next();
            });

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
