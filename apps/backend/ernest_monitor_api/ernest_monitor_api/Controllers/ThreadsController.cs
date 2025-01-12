using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SampleAzureApi.Data;
using SampleAzureApi.Models;

namespace SampleAzureApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThreadsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ThreadsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpOptions]
        public IActionResult Options()
        {
            Response.Headers.Add("Allow", "GET,POST,PUT,DELETE,OPTIONS");
            return Ok();
        }

        // GET: api/threads
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Threads>>> GetThreads()
        {
            return await _context.Threads.FromSqlRaw("SELECT * FROM Threads").ToListAsync();

        }

        //    // GET: api/threads/5
        //    [HttpGet("{id}")]
        //    public async Task<ActionResult<Threads>> GetThread(int id)
        //    {
        //        var thread = await _context.Threads.FindAsync(id);

        //        if (thread == null)
        //        {
        //            return NotFound();
        //        }

        //        return thread;
        //    }

        //    // POST: api/threads
        //    [HttpPost]
        //    public async Task<ActionResult<Threads>> PostThread(Threads thread)
        //    {
        //        thread.CreatedAt = DateTime.UtcNow;
        //        thread.UpdatedAt = DateTime.UtcNow;
        //        _context.Threads.Add(thread);
        //        await _context.SaveChangesAsync();

        //        return CreatedAtAction(nameof(GetThread), new { id = thread.ThreadID }, thread);
        //    }

        //    // PUT: api/threads/5
        //    [HttpPut("{id}")]
        //    public async Task<IActionResult> PutThread(int id, Threads thread)
        //    {
        //        if (id != thread.ThreadID)
        //        {
        //            return BadRequest();
        //        }

        //        var existingThread = await _context.Threads.FindAsync(id);
        //        if (existingThread == null)
        //        {
        //            return NotFound();
        //        }

        //        existingThread.RegionName = thread.RegionName;
        //        existingThread.UserId = thread.UserId;
        //        existingThread.ThreadType = thread.ThreadType;
        //        existingThread.DangerLevel = thread.DangerLevel;
        //        existingThread.TrustLevel = thread.TrustLevel;
        //        existingThread.Description = thread.Description;
        //        existingThread.Files = thread.Files;
        //        existingThread.Status = thread.Status;
        //        existingThread.UpdatedAt = DateTime.UtcNow;

        //        await _context.SaveChangesAsync();

        //        return NoContent();
        //    }

        //    // DELETE: api/threads/5
        //    [HttpDelete("{id}")]
        //    public async Task<IActionResult> DeleteThread(int id)
        //    {
        //        var thread = await _context.Threads.FindAsync(id);
        //        if (thread == null)
        //        {
        //            return NotFound();
        //        }

        //        _context.Threads.Remove(thread);
        //        await _context.SaveChangesAsync();

        //        return NoContent();
        //    }
        //}
    }
}