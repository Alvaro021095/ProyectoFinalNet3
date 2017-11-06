using FinalNet3.DTO.Administracion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.Contracts.Administracion
{
    interface ITipoDocumentoService
    {
        IList<String> SaveInfo(TipoDocumentoDTO objDTO);
        IList<String> ListInfo();
        IList<String> SearchInfo(String nombre);
        IList<String> DeleteInfo(int id);
        IList<String> LoadTipoDocumento();
    }
}