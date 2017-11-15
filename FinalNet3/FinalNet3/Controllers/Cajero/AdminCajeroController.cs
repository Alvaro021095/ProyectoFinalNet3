using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FinalNet3.Controllers.Cajero
{
    public class AdminCajeroController : BaseController
    {

        public ActionResult LegalizarCita()
        {
            /*Valida si se puede redireccinar la pagina solicitada o si retorna al index*/
            return ReturnViewOrRedirect();
        }

        public ActionResult CancelarCita()
        {
            /*Valida si se puede redireccinar la pagina solicitada o si retorna al index*/
            return ReturnViewOrRedirect();
        }

    }
}