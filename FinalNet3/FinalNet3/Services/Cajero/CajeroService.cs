using FinalNet3.Contracts.Cajero;
using FinalNet3.Infraestructure;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace FinalNet3.Services.Cajero
{
    public class CajeroService : ICajeroService
    {

        private SqlConnection Conn { get; set; }

        public CajeroService()
        {

        }

        public IList<String> Legalizar(String documento, String numero)
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
                    comm.CommandText = "legalizarCita";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Documento";
                    dp.Value = documento;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Numero";
                    dp.Value = numero;
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


        public IList<String> Cancelar(String documento, String numero)
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
                    comm.CommandText = "calcelarCita";


                    //AÑADIR PARAMETROS AL PROCEDIMIENTO ALMACENADO
                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Documento";
                    dp.Value = documento;
                    comm.Parameters.Add(dp);

                    dp = comm.CreateParameter();
                    dp.ParameterName = "@Numero";
                    dp.Value = numero;
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