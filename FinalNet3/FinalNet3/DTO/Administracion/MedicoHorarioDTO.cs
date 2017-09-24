using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.DTO.Administracion
{
    public class MedicoHorarioDTO
    {

        public int id { get; set; }
        public String horario { get; set; }
        public String descripcion { get; set; }

        public MedicoHorarioDTO(int Id, String Horario, String Descripcion)
        {
            this.id = Id;
            this.horario = Horario;
            this.descripcion = Descripcion;
        }

    }
}