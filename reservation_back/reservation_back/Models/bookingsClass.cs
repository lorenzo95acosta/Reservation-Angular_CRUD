using System.ComponentModel.DataAnnotations;

namespace reservation_back.Models
{
  public class bookingsClass
  {
    public int Id { get; set; }
    [Required]
    public string name { get; set; }
    [Required]
    public int cabin { get; set; }
    public bool active { get; set; }
    [Required]
    public string restaurant { get; set; }
    [Required]
    public string date { get; set; }
    [Required]
    public string hour { get; set; }
    [Required]
    public int attendees { get; set; }
  }
}
