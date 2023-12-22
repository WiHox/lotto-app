using lotto_api.Data_layer;
using lotto_api.Models;

namespace lotto_api.DataAccessLayer
{
   public class LottoDataAccess : ILottoDataAccess
   {
      private readonly AppDbContext _dbContext;

      public LottoDataAccess(AppDbContext dbContext)
      {
         _dbContext = dbContext;
      }

      public TicketModel GetTicket(int ticketId)
      {
         return _dbContext.Tickets.Find(ticketId);
      }

      public List<TicketModel> GetTickets()
      {
         return _dbContext.Tickets.ToList();
      }

      public void AddTicket(TicketModel ticket)
      {
         _dbContext.Add(ticket);
         _dbContext.SaveChanges();
      }
   }
}
