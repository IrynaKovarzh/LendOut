using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
//using Microsoft.AspNetCore.StaticFiles;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace LendOut
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

			// Configure a rewrite rule to auto-lookup for standard default files such as index.html.
			app.UseDefaultFiles();

			// Serve static files (html, css, js, images & more). See also to following URL:          
			app.UseStaticFiles(new StaticFileOptions()
			{
				OnPrepareResponse = (context) =>
				{
					// Disable caching for all static files.
					context.Context.Response.Headers["Cache-Control"] =
					Configuration["StaticFiles:Headers:Cache-Control"];
					context.Context.Response.Headers["Pragma"] =
					Configuration["StaticFiles:Headers:Pragma"];
					context.Context.Response.Headers["Expires"] =
					Configuration["StaticFiles:Headers:Expires"];
				}
			});

			// Add MVC to the pipeline
			app.UseMvc();

		}

		// Configure a rewrite rule to auto-lookup for standard default files such as index.html.

	}
}
