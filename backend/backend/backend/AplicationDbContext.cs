using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class AplicationDbContext : DbContext
    {

        public DbSet<Producto> Producto { get; set; }
        public DbSet<Client> Client { get; set; }
        public DbSet<Orders> Orders { get; set; }
        public DbSet<ModalList> ModalList { get; set; }

        public AplicationDbContext(DbContextOptions<AplicationDbContext> options) : base(options)
        {
            
        }
    }
}
