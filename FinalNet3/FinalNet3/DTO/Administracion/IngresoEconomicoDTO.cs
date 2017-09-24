using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.DTO.Administracion
{
    public class IngresoEconomicoDTO
    {

        public int id { get; set; }
        public String nombre { get; set; }
        public String categoria { get; set; }
        public double valor_cat_cita { get; set; }
        public double valor_cat_medicamento { get; set; }

        public IngresoEconomicoDTO(int Id, String Nombre, String Categoria,double Valor_cat_cita,
            double Valor_cat_medicamento)
        {
            this.id = Id;
            this.nombre = Nombre;
            this.categoria = Categoria;
            this.valor_cat_cita = Valor_cat_cita;
            this.valor_cat_medicamento = Valor_cat_medicamento;
        }

    }
}