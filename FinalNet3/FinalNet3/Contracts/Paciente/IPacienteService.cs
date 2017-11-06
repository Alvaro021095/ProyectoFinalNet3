using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using FinalNet3.DTO;
using FinalNet3.DTO.Paciente;

namespace FinalNet3.Contracts.Paciente
{
    interface IPacienteService
    {

        IList<String> SaveInfo(PacienteDTO objDTO);
        IList<String> SearchInfo(int idPaciente);

        IList<String> loadTipoDocumento();

        IList<String> loadIngreso();



    }
}