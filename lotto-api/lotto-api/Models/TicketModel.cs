using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace lotto_api.Models
{
    public class TicketModel
    {
        [Key]
        public int Id { get; set; }

        [NotMapped]
        public List<List<int>> ArraysOfNumbers { get; set; }

        [Column("ArraysOfNumbers")]
        public string ArraysOfNumbersAsString
        {
            get => ConvertListToString(ArraysOfNumbers);
            set => ArraysOfNumbers = ConvertStringToList(value);
        }

        [Range(0, 9)]
        public int Superzahl { get; set; }

        private static string ConvertListToString(List<List<int>> list)
        {
            return JsonConvert.SerializeObject(list);
        }

        private static List<List<int>> ConvertStringToList(string value)
        {
            return JsonConvert.DeserializeObject<List<List<int>>>(value);
        }
    }
}
