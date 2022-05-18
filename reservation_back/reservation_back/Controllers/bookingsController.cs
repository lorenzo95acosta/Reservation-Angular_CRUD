using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using reservation_back.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace reservation_back.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class bookingsController : ControllerBase
  {

    private readonly  AplicationDbContext _context;

    public bookingsController(AplicationDbContext context)
    {
      _context = context;
    }

    // GET: api/<bookingsController>
    [HttpGet]
    public async Task<IActionResult> Get()
    {
      try
      {
        var listBookings = await _context.Reservation.ToListAsync();
        return Ok(listBookings);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }


    // POST api/<bookingsController>
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] bookingsClass booking)
    {
      try
      {
        _context.Add(booking);
        await _context.SaveChangesAsync();
        return Ok(booking);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // PUT api/<bookingsController>/5
    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] bookingsClass booking)
    {
      try
      {
        if(id != booking.Id) { return NotFound(); };
        _context.Update(booking);
        await _context.SaveChangesAsync();
        return Ok(new {message = "Reservation updated succesfully"});
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }

    // DELETE api/<bookingsController>/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
      try
      {
        var reservation = await _context.Reservation.FindAsync(id);
        if(reservation == null) { return NotFound(); };
        _context.Reservation.Remove(reservation);
        await _context.SaveChangesAsync();
        return Ok(new { message = "Reservation deleted succesfully" });
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }
    }
  }
}
