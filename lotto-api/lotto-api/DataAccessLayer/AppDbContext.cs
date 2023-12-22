using lotto_api.Models;
using Microsoft.EntityFrameworkCore;

namespace lotto_api.Data_layer
{
   public class AppDbContext : DbContext
   {
      public AppDbContext(DbContextOptions options) : base(options)
      {
      }

      public DbSet<TicketModel> Tickets { get; set; }
   }
}
