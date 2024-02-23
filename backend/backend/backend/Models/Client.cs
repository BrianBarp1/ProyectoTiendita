using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class Client
    {
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string DNI { get; set; }
        [Required]
        public string Direccion { get; set; }
        [Required]
        public string Telefono { get; set; }

    }
}
