using IdSpAPI.Models;
using IdSpAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace IdSpAPI.Controllers;

[ApiController]
[Route("api/players")]
public class PlayerController : ControllerBase
{
    private readonly Context _context;

    public PlayerController(Context context)
    {
        _context = context;
    }

    // GET: api/players
    [HttpGet("all")]
    public async Task<ActionResult<IEnumerable<Player>>> GetPlayers()
    {
        // Get players and related lists
        var players = _context.Players;
        return await players.ToListAsync();
    }

    // GET: api/players/byId
    [HttpGet("{id}")]
    public async Task<ActionResult<Player>> GetPlayer(int id)
    {
        // Find player and related list
        // SingleAsync() throws an exception if no student is found (which is possible, depending on id)
        // SingleOrDefaultAsync() is a safer choice here
        var player = await _context.Players.SingleOrDefaultAsync(t => t.Id == id);

        if (player == null)
            return NotFound();

        return player;
    }

    // POST: api/players
    [HttpPost]
    public async Task<ActionResult<Player>> PostPlayer(Player player)
    {
        // Student student = new(studentDTO);

        _context.Players.Add(player);
        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetPlayer), new { id = player.Id }, value: player);
    }

    // PUT: api/players/byId
    [HttpPut("{id}")]
    public async Task<IActionResult> PutPlayer(int id, Player player)
    {
        if (id != player.Id)
            return BadRequest();

        // Student student = new(studentDTO);

        _context.Entry(player).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Players.Any(m => m.Id == id))
                return NotFound();
            else
                throw;
        }

        return NoContent();
    }

    // DELETE: api/players/byId
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePlayerItem(int id)
    {
        var player = await _context.Players.FindAsync(id);

        if (player == null)
            return NotFound();

        _context.Players.Remove(player);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}
