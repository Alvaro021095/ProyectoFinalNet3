using FinalNet3.Contracts.Paciente;
using FinalNet3.DTO.Paciente;
using FinalNet3.Infraestructure;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FinalNet3.Services.Paciente
{
    public class PacienteService : IPacienteService
    {

        private SqlConnection Conn { get; set; }


        public PacienteService()
        {

        }

        public IList<String> SaveInfo(PacienteDTO obj)
        {

            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "guardarPersona";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id";
                    dp.Value = obj.id;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Nombre";
                    dp.Value = obj.nombre;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Apellido";
                    dp.Value = obj.apellido;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Documento";
                    dp.Value = obj.documento;
                    comm.Parameters.Add(dp);


                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Correo";
                    dp.Value = obj.correo;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Fecha_Nacimiento";
                    dp.Value = obj.fecha_nacimiento;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id_TipoDocumento";
                    dp.Value = obj.idTipoDocumento;                    
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id_Municipio";
                    dp.Value = obj.idMunicipio;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Usuario";
                    dp.Value = obj.usuario;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Password";
                    dp.Value = obj.password;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Estrato";
                    dp.Value = obj.estrato;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Sisben";
                    dp.Value = obj.sisben;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id_Cotizante";
                    dp.Value = obj.idCotizante;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id_TipoPaciente";
                    dp.Value = obj.idTipoPaciente;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id_Ingreso_Economico";
                    dp.Value = obj.idIngreso;
                    comm.Parameters.Add(dp);

                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }



        /*El id del paciente se obtiene cuando el se halla logeado,
         luego de eso se utliza como variable global*/
        public IList<String> SearchInfo(int idPaciente)
        {

            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "buscarPaciente";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@idPaciente";
                    dp.Value = idPaciente;
                    comm.Parameters.Add(dp);


                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }

        public IList<string> LoadDepartamento(int id_pais)
        {
            throw new NotImplementedException();
        }

        public IList<string> LoadMunicipio(int id_departamento)
        {
            throw new NotImplementedException();
        }

        public IList<string> loadTipoDocumento()
        {
            throw new NotImplementedException();
        }

        public IList<string> loadIngreso()
        {
            throw new NotImplementedException();
        }

        public IList<string> cobijarUsuario(int idPaciente, String documento)
        {
            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "acobijarUsuario";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@idCliente";
                    dp.Value = idPaciente;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Documento";
                    dp.Value = documento;
                    comm.Parameters.Add(dp);


                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }

        public IList<string> LoadMedico(int id_medico)
        {
            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "cargarMedico";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@IdTipoMedico";
                    dp.Value = id_medico;
                    comm.Parameters.Add(dp);


                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount, rows = 0;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }
                    }
                    if (list.Count > 0)
                    {
                        list.Add(columns + "");
                        list.Add(rows + "");
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }



        public IList<string> LoadHorarioMedico(int medico)
        {
            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "verHorarioMedico";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@idMedico";
                    dp.Value = medico;
                    comm.Parameters.Add(dp);


                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount, rows = 0;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }
                    }
                    if (list.Count > 0)
                    {
                        list.Add(columns + "");
                        list.Add(rows + "");
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }


        public IList<string> verHistorialMedico(int idPaciente)
        {

            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "verHistorialMedico";


                    dp = comm.CreateParameter();
                    dp.ParameterName = "@idCliente";
                    dp.Value = idPaciente;
                    comm.Parameters.Add(dp);

                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount, rows = 0;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }

                        rows++;
                    }

                    if (list.Count > 0)
                    {
                        list.Add(columns + "");
                        list.Add(rows + "");
                    }

                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }


        public IList<string> SolicitarCita(int idPaciente, String idMedicoHorario, String numero, String fecha)
        {

            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "solicitarCita";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@idCliente";
                    dp.Value = idPaciente;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@idMedicoHorario";
                    dp.Value = idMedicoHorario;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Numero";
                    dp.Value = numero;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Fecha";
                    dp.Value = fecha;
                    comm.Parameters.Add(dp);

                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }



        public IList<String> buscarPacienteNoCotizante(String documento)
        {

            List<String> list = new List<String>();

            try
            {
                using (Conn = new Connection().Conexion)
                {

                    IDbCommand comm = Conn.CreateCommand();
                    IDbDataParameter dp = comm.CreateParameter();
                    comm.Connection = Conn;
                    comm.CommandType = CommandType.StoredProcedure;
                    comm.CommandText = "buscarPacienteNoCotizante";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@documento";
                    dp.Value = documento;
                    comm.Parameters.Add(dp);


                    Conn.Open();
                    IDataReader dr = comm.ExecuteReader(CommandBehavior.CloseConnection);
                    int columns = dr.FieldCount;

                    while (dr.Read())
                    {
                        for (int i = 0; i < columns; i++)
                        {
                            list.Add(dr.GetValue(i).ToString().Trim());
                        }
                    }
                }
            }
            catch (Exception ex)
            {
                list.Add(String.Format("Error: {0}", ex.Message));
            }

            return list;
        }

    }
}