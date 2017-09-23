using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.DTO
{
    public class BodegaDTO
    {

        public int id { get; set; }
        public String nombre { get; set; }
        public String direccion { get; set; }
        public String descripcion { get; set; }

        public BodegaDTO(int Id, String Nombre, String Direccion, String Descripcion)
        {
            this.id = Id;
            this.nombre = Nombre;
            this.direccion = Direccion;
            this.descripcion = Descripcion;
        }

    }
}