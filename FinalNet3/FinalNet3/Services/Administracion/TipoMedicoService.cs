using FinalNet3.Contracts.Administracion;
using FinalNet3.Infraestructure;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FinalNet3.Services.Administracion
{
    public class TipoMedicoService : ITipoMedicoService
    {

        private SqlConnection Conn { get; set; }

        public TipoMedicoService()
        {

        }

        public IList<string> SaveInfo(DTO.Administracion.TipoMedicoDTO objDTO)
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
                    comm.CommandText = "guardarTipoMedico";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id";
                    dp.Value = objDTO.id;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Nombre";
                    dp.Value = objDTO.nombre;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Descripcion";
                    dp.Value = objDTO.descripcion;
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

        public IList<string> ListInfo()
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
                    comm.CommandText = "listarTipoMedico";

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

        public IList<string> SearchInfo(string nombre)
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
                    comm.CommandText = "buscarTipoMedico";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Nombre";
                    dp.Value = nombre;
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

        public IList<string> DeleteInfo(int id)
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
                    comm.CommandText = "eliminarTipoMedico";

                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Id";
                    dp.Value = id;
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