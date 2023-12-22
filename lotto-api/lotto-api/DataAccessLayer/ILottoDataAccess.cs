using lotto_api.Models;

namespace lotto_api.DataAccessLayer
{
   public interface ILottoDataAccess
   {
      TicketModel GetTicket(int ticketId);
      List<TicketModel> GetTickets();
      void AddTicket(TicketModel ticket);
   }
}
