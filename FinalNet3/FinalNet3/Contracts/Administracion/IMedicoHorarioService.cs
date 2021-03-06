﻿using FinalNet3.DTO.Administracion;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FinalNet3.Contracts.Administracion
{
    interface IMedicoHorarioService
    {

        IList<String> SaveInfo(MedicoHorarioDTO objDTO);
        IList<String> ListInfo();
        IList<String> SearchInfo(String horario);
        IList<String> DeleteInfo(int id);

    }
}