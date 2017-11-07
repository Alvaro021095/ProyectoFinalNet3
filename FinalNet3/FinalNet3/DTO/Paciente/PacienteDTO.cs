using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.DTO.Paciente
{
    public class PacienteDTO
    {

        public int id { get; set; }
        public String nombre { get; set; }
        public String apellido { get; set; }
        public String documento { get; set; }
        public String correo { get; set; }
        public DateTime fecha_nacimiento { get; set; }
        public int idTipoDocumento { get; set; }
        public int idMunicipio { get; set; }
        public String usuario { get; set; }
        public String password { get; set; }
        public int estrato { get; set; }
        public int sisben { get; set; }
        public int idCotizante { get; set; }
        public int idTipoPaciente { get; set; }
        public int idIngreso { get; set; }


        public PacienteDTO(int Id,String Nombre, String Apellido, String Documento, String Correo,
            DateTime Fecha, int IdTipoDoc, int IdMunicipio, String Usuario, String Password,
            int Estrato, int Sisben, int IdCotizante, int IdTipoPaciente, int IdIngreso)
        {
            this.id = Id;
            this.nombre = Nombre;
            this.apellido = Apellido;
            this.documento = Documento;
            this.correo = Correo;
            this.fecha_nacimiento = Fecha;
            this.idTipoDocumento = IdTipoDoc;
            this.idMunicipio = IdMunicipio;
            this.usuario = Usuario;
            this.password = Password;
            this.estrato = Estrato;
            this.sisben = Sisben;
            this.idCotizante = IdCotizante;
            this.idTipoPaciente = IdTipoPaciente;
            this.idIngreso = IdIngreso;
        }
    }
}