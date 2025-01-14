using ernest_monitor_api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SampleAzureApi.Data;

namespace ernest_monitor_api.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class ResourcesController : ControllerBase
        {
            private readonly AppDbContext _context;

            public ResourcesController(AppDbContext context)
            {
                _context = context;
            }

            // GET: api/Resourcess
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Resource>>> GetResourcess()
            {
                return await _context.Resources.ToListAsync();
            }

            // GET: api/Resourcess/{id}
            [HttpGet("{id}")]
            public async Task<ActionResult<Resource>> GetResources(int id)
            {
                var Resource = await _context.Resources.FindAsync(id);

                if (Resource == null)
                {
                    return NotFound();
                }

                return Resource;
            }

            // PUT: api/Resourcess/{id}
            [HttpPut("{id}")]
            public async Task<IActionResult> PutResources(int id, Resource Resource)
            {
                if (id != Resource.ResourceId)
                {
                    return BadRequest();
                }

                _context.Entry(Resource).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ResourcesExists(id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }

                return NoContent();
            }

            // POST: api/Resources
            [HttpPost]
            public async Task<ActionResult<Resource>> PostResources(Resource Resource)
            {
                _context.Resources.Add(Resource);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetResources", new { id = Resource.ResourceId }, Resource);
            }

            // DELETE: api/Resources/{id}
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteResources(int id)
            {
                var Resources = await _context.Resources.FindAsync(id);
                if (Resources == null)
                {
                    return NotFound();
                }

                _context.Resources.Remove(Resources);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool ResourcesExists(int id)
            {
                return _context.Resources.Any(e => e.ResourceId == id);
            }
        }
    
}
