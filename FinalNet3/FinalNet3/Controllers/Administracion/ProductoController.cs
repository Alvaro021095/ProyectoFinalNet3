using FinalNet3.Contracts.Administracion;
using FinalNet3.DTO.Administracion;
using FinalNet3.Services.Administracion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FinalNet3.Controllers.Administracion
{
    public class ProductoController : BaseController
    {

        private static readonly IProductoService ContractService = new ProductoService();

        public ActionResult SaveInfo(int id, String nombre, String descripcion)
        {
            /*Se define el DTO (Clase que solo define datos, no funciones que lo diferencia del modelo)*/
            ProductoDTO objDTO = new ProductoDTO(id, nombre, descripcion);
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



        public ActionResult SearchInfo(String nombre)
        {
            /*Se recibe en una lista generica el resultado del login definida en el service y obligada por el contract*/
            IEnumerable<String> info = ContractService.SearchInfo(nombre);
            /*Se para la lista de la respuesta a JSON*/
            return Json(new { d = info });
        }


        public ActionResult ListInfo()
        {
            /*Se recibe en una lista generica el resultado del login definida en el service y obligada por el contract*/
            IEnumerable<String> info = ContractService.ListInfo();
            /*Se para la lista de la respuesta a JSON*/
            return Json(new { d = info });
        }



        public ActionResult DeleteInfo(int id)
        {
            /*Se recibe en una lista generica el resultado del login definida en el service y obligada por el contract*/
            IEnumerable<String> info = ContractService.DeleteInfo(id);
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

    }
}