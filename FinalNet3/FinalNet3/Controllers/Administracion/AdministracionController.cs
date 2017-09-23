using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FinalNet3.Controllers.Administracion
{
    public class AdministracionController : BaseController
    {

        public ActionResult Bodega()
        {
            /*Valida si se puede redireccinar la pagina solicitada o si retorna al index*/
            return ReturnViewOrRedirect();
        }

    }
}