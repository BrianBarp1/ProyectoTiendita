using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Producto
    {
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Creador { get; set;}
        [Required]
        public string Descripcion { get; set;}
        [Required]
        public double Precio { get; set; }
        [Required]
        public double Stock { get; set; } 
        [Required]
        public DateTime FechaCreacion { get; set; }

    }
}
