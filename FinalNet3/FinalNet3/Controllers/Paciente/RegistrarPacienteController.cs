using FinalNet3.Contracts.Paciente;
using FinalNet3.DTO.Paciente;
using FinalNet3.Services.Paciente;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FinalNet3.Controllers.Paciente
{
    public class RegistrarPacienteController : BaseController
    {

        private static readonly IPacienteService ContractService = new PacienteService();

        public ActionResult SaveInfo(int id, String nombre, String apellido, String documento,
            String correo, DateTime fecha_nacimiento, int idTipoDoc, int idMunicipio,
            String usuario, String password, int estrato, int sisben, int idCotizante,
            int idTipoPac, int idIngreso)
        {
            /*Se define el DTO (Clase que solo define datos, no funciones que lo diferencia del modelo)*/
            PacienteDTO objDTO = new PacienteDTO(id, nombre, apellido, documento, correo, fecha_nacimiento, idTipoDoc,
                idMunicipio, usuario, password, estrato, sisben, idCotizante, idTipoPac, idIngreso);
            /*Se recibe en una lista generica el resultado del login definida en el service y obligada por el contract*/
            IEnumerable<String> info = ContractService.SaveInfo(objDTO);
            /*Lista temporal que contendra la respuesta que se le dara al cliente*/
            IList<String> res = new List<String>();

            /*Se valida si la consulta SQL retorno valores*/
            if (info != null && info.Count() > 0)
            {
                res.Add("Status");
                res.Add("Success");
            }
            /*Se para la lista de la respuesta a JSON*/
            return Json(new { d = res });
        }


        public ActionResult SearchInfo(int idPaciente)
        {
            /*Se recibe en una lista generica el resultado del login definida en el service y obligada por el contract*/
            IEnumerable<String> info = ContractService.SearchInfo(idPaciente);
            /*Se para la lista de la respuesta a JSON*/
            return Json(new { d = info });
        }


    }
}