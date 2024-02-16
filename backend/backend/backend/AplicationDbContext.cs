using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class AplicationDbContext : DbContext
    {

        public DbSet<Producto> Producto { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {
            
        }
    }
}
