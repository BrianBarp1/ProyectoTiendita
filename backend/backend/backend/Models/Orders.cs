using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class Orders
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo Cliente es obligatorio")]
        public string Client { get; set; }

        [Required(ErrorMessage = "El campo Fecha es obligatorio")]
        public DateTime Date { get; set; }

        public decimal Total { get; set; }


    }
}
