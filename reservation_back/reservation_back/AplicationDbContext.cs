using Microsoft.EntityFrameworkCore;
using reservation_back.Models;

namespace reservation_back
{
  public class AplicationDbContext: DbContext
  {
    public DbSet<bookingsClass> Reservation { get; set; }

    public AplicationDbContext(DbContextOptions<AplicationDbContext> options): base(options)
    {

    }
  }
}
