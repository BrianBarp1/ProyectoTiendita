using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class ModalList
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo IdProducto es obligatorio")]
        public int Producto { get; set; }

        [Required(ErrorMessage = "El campo Cantidad es obligatorio")]
        public int Cantidad { get; set; }

        [Required(ErrorMessage = "El campo Total es obligatorio")]
        public decimal Total { get; set; }


    }
}
