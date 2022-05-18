using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;


namespace reservation_back
{
  public class Startup
  {

    public static WebApplication InitializeApp(string[] args)
    {
      var builder = WebApplication.CreateBuilder(args);
      ConfigureServices(builder);
      //In this app variable, we configure the middlewares
      var app = builder.Build();
      Configure(app);
      return app;
    }

    private static void ConfigureServices(WebApplicationBuilder builder)
    {

      builder.Services.AddControllers();
      // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
      builder.Services.AddEndpointsApiExplorer();
      builder.Services.AddSwaggerGen();
      builder.Services.AddDbContext<AplicationDbContext>(options =>
        options.UseSqlServer(connectionString: "Server=localhost\\SQLEXPRESS;Database=reservationsDB;Trusted_Connection=True;"));
    }

    private static void Configure(WebApplication app)
    {
      // Configure the HTTP request pipeline.
      if (app.Environment.IsDevelopment())
      {
        app.UseSwagger();
        app.UseSwaggerUI();
      }

      app.UseHttpsRedirection();

      app.UseAuthorization();

      app.MapControllers();
    }

  }
}
