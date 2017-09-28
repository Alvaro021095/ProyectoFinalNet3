using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.DTO.Administracion
{
    public class DepartamentoDTO
    {
        public int id { get; set; }
        public String nombre { get; set; }
        public String descripcion { get; set; }
        public int id_pais {get; set;}

        public DepartamentoDTO(int Id, String Nombre, String Descripcion, int Id_Pais)
        {
            this.id = Id;
            this.nombre = Nombre;
            this.descripcion = Descripcion;
            this.id_pais = Id_Pais;
        }

    }
}