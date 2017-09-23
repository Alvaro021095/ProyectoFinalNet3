using FinalNet3.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.Contracts.Administracion
{
    interface IBodegaService
    {

        IList<String> SaveInfo(BodegaDTO objDTO);
        IList<String> ListInfo();
        IList<String> SearchInfo(String nombre);
        IList<String> DeleteInfo(int id);

    }
}