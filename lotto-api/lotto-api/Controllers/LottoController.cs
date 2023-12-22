using lotto_api.Data_layer;
using lotto_api.DataAccessLayer;
using lotto_api.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace lotto_api.Controllers
{
   [Route("lotto")]
   [ApiController]
   public class LottoController : ControllerBase
   {

      private readonly ILottoDataAccess _lottoDataAccess;

      public LottoController(ILottoDataAccess lottoDataAccess)
      {
         _lottoDataAccess = lottoDataAccess;
      }

      [HttpGet("ticket")]
      public ActionResult<TicketModel> GetTicket(int ticketId)
      {
         var ticket = _lottoDataAccess.GetTicket(ticketId);

         if (ticket == null)
         {
            return NotFound("Ticket not found");
         }

         return Ok(ticket);
      }

      [HttpGet("tickets")]
      public ActionResult<List<TicketModel>> GetTickets()
      {
         var tickets = _lottoDataAccess.GetTickets();

         return Ok(tickets);
      }

      [HttpPost("addTicket")]
      public IActionResult SubmitTicket([FromBody] TicketModel ticket)
      {
         try
         {
            _lottoDataAccess.AddTicket(ticket);

            return Ok();
         }
         catch
         {
            return StatusCode(500, "Error");
         }
      }
   }
}
