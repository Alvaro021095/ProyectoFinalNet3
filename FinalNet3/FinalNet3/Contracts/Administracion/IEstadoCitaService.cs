﻿using FinalNet3.DTO.Administracion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.Contracts.Administracion
{
    interface IEstadoCitaService
    {

        IList<String> SaveInfo(EstadoCitaDTO objDTO);
        IList<String> ListInfo();
        IList<String> SearchInfo(String nombre);
        IList<String> DeleteInfo(int id);

    }
}