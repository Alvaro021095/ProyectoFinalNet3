using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FinalNet3.Controllers.Paciente
{
    public class PacienteController : BaseController
    {

        public ActionResult RegistroPaciente()
        {
            /*Valida si se puede redireccinar la pagina solicitada o si retorna al index*/
            return ReturnViewOrRedirect();
        }

        public ActionResult BuscarPaciente()
        {
            /*Valida si se puede redireccinar la pagina solicitada o si retorna al index*/
            return ReturnViewOrRedirect();
        }


        public ActionResult SolicitarCita()
        {
            /*Valida si se puede redireccinar la pagina solicitada o si retorna al index*/
            return ReturnViewOrRedirect();
        }

    }
}