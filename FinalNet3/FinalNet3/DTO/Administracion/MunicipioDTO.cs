using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.DTO.Administracion
{
    public class MunicipioDTO
    {
        public int id { get; set; }
        public String nombre { get; set; }
        public String descripcion { get; set; }
        public int id_deparatamento {get; set;}

        public MunicipioDTO(int Id, String Nombre, String Descripcion, int Id_Departamento)
        {
            this.id = Id;
            this.nombre = Nombre;
            this.descripcion = Descripcion;
            this.id_deparatamento = Id_Departamento;
        }
    }
}