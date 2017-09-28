using FinalNet3.DTO.Administracion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.Contracts.Administracion
{
    interface IDepartamentoService
    {
        IList<String> SaveInfo(DepartamentoDTO objDTO);
        IList<String> ListInfo();
        IList<String> SearchInfo(String nombre);
        IList<String> DeleteInfo(int id);
        IList<String> LoadPais();
        IList<String> LoadDepartamento(int id_pais);

    }
}