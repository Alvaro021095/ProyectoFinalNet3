using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.DTO.Administracion
{
    public class TipoAfiliacionDTO
    {

        public int id { get; set; }
        public String nombre { get; set; }
        public String descripcion { get; set; }

        public TipoAfiliacionDTO(int Id, String Nombre, String Descripcion)
        {
            this.id = Id;
            this.nombre = Nombre;
            this.descripcion = Descripcion;
        }

    }
}