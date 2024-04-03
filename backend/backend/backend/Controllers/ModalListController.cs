using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModalListController : ControllerBase
    {
        private readonly AplicationDbContext _context;

        public ModalListController(AplicationDbContext context)
        {
            _context = context;
        }

        // GET api/<ModalListController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ModalList>>> Get()
        {
            try
            {
                return await _context.ModalList.ToListAsync();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // GET api/<ModalListController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ModalList>> Get(int id)
        {
            try
            {
                var modalList = await _context.ModalList.FindAsync(id);

                if (modalList == null)
                {
                    return NotFound();
                }

                return modalList;
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST api/Orders/ModalList
        [HttpPost]
        public async Task<ActionResult<ModalList>> PostOrdersModalList(ModalList modalList)
        {
            try
            {
                _context.Add(modalList);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(Get), new { id = modalList.Id }, modalList);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<ModalListController>/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, ModalList modalList)
        {
            try
            {
                if (id != modalList.Id)
                {
                    return BadRequest();
                }

                _context.Entry(modalList).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<ModalListController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var modalList = await _context.ModalList.FindAsync(id);

                if (modalList == null)
                {
                    return NotFound();
                }

                _context.ModalList.Remove(modalList);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
