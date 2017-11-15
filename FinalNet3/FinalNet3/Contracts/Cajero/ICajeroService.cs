using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.Contracts.Cajero
{
    interface ICajeroService 
    {

        IList<String> Legalizar(String documento, String numero);

        IList<String> Cancelar(String documento, String numero);

    }
}