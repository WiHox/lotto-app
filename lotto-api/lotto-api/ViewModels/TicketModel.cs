using System.ComponentModel.DataAnnotations;

namespace lotto_api.Models
{
   public class TicketViewModel
   {
        [Required]
        public List<List<int>> ArraysOfNumbers { get; set; }

        [Range(0,9)]
        public int Superzahl { get; set; }
    }
}
