using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking.Internal;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BackendController : ControllerBase
    {
        public readonly AplicationDbContext _context;

        public BackendController(AplicationDbContext context)
        {
            _context = context;
        }


        // GET: api/<BackendController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var listBackend = await _context.Producto.ToListAsync();

                return Ok(listBackend);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<BackendController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                var back = await _context.Producto.FindAsync(id);

                if(back == null)
                {
                    return NotFound();
                }

                return Ok(back);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/<BackendController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Producto libro)
        {
            try
            {
                _context.Add(libro);
                await _context.SaveChangesAsync();
                return Ok (libro);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<BackendController>/5
        [HttpPut("{id}")]
        public async Task <IActionResult> Put(int id, [FromBody] Producto libro)
        {
            try
            {
                if(id != libro.Id)
                {
                    return BadRequest();
                }
                _context.Update(libro);
                await _context.SaveChangesAsync();
                return Ok(new {message = "Producto actualizado con exito!"});
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }

        // DELETE api/<BackendController>/5
        [HttpDelete("{id}")]
        public async Task <IActionResult> Delete(int id)
        {
            try
            {
                var libro = await _context.Producto.FindAsync(id);
                if(libro == null)
                {
                    return NotFound();
                }
                _context.Producto.Remove(libro);
                await _context.SaveChangesAsync();
                return Ok(new {message = "Producto eliminado con exito"});

            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
    }
}
