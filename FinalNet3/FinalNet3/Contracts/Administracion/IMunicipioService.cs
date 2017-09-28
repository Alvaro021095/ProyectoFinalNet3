using FinalNet3.DTO.Administracion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.Contracts.Administracion
{
    interface IMunicipioService
    {
        IList<String> SaveInfo(MunicipioDTO objDTO);
        IList<String> ListInfo();
        IList<String> SearchInfo(String usuario);
        IList<String> DeleteInfo(int id);
        IList<String> LoadDepartamento(int id_pais);
        IList<String> LoadMunicipio(int id_departamento);

    }
}