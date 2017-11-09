$(document).ready(function () {
    cargarTipoMedico();
});


function cargarTipoMedico() {

    $.ajax({
        type: 'POST',
        url: "/TipoMedico/LoadTipoMedico",
        data: "",
        success: function (data) {

            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;

                var select = document.getElementById("selTipoMe");

                while (select.length > 1) {
                    select.remove(select.length - 1);
                }

                var opt = null;

                for (var k = 0; k < qantity; k += cols) {
                    opt = new Option(data.d[k + 1], data.d[k]);
                    select.options[select.length] = opt;
                }

                select.value = -1;


            } else {
                alert("No se encuentra");
            }


        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
        }
    });
}


function cargarMedico(seleccion) {

    var tipoMedico = $("#selTipoMe").val();

    if(tipoMedico != -1){

        $.ajax({
            type: 'POST',
            url: "/RegistrarPaciente/LoadMedico",
            data: { id_medico: tipoMedico },
            success: function (data) {

                if (data.d.length > 0) {


                    var qantity = (data.d.length);
                    var rows = parseInt(data.d[qantity - 1]);
                    var cols = parseInt(data.d[qantity - 2]);
                    qantity -= 2;

                    var select = document.getElementById("selMedico");

                    while (select.length > 1) {
                        select.remove(select.length - 1);
                    }

                    var opt = null;

                    for (var k = 0; k < qantity; k += cols) {
                        opt = new Option(data.d[k + 1], data.d[k]);
                        select.options[select.length] = opt;
                    }

                    if (seleccion) {
                        $("#selMedico").val(seleccion);
                    } else {
                        select.value = -1;
                    }

                    select.value = -1;

                } else {

                    var select = document.getElementById("selIdMedico");

                    while (select.length > 1) {
                        select.remove(select.length - 1);
                    }
                }


            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });

    }

}


function cargarHorarioMedico(seleccion) {

    var medico = $("#selMedico").val();

    if (medico != -1) {

        $.ajax({
            type: 'POST',
            url: "/RegistrarPaciente/LoadHorarioMedico",
            data: { medico: medico },
            success: function (data) {

                if (data.d.length > 0) {

                    var qantity = (data.d.length);
                    var rows = parseInt(data.d[qantity - 1]);
                    var cols = parseInt(data.d[qantity - 2]);
                    qantity -= 2;

                    var select = document.getElementById("selIdMedicoHorario");

                    while (select.length > 1) {
                        select.remove(select.length - 1);
                    }

                    var opt = null;

                    for (var k = 0; k < qantity; k += cols) {
                        opt = new Option(data.d[k + 1], data.d[k]);
                        select.options[select.length] = opt;
                    }

                    if (seleccion) {
                        $("#selIdMedicoHorario").val(seleccion);
                    } else {
                        select.value = -1;
                    }

                } else {

                    var select = document.getElementById("selIdMedicoHorario");

                    while (select.length > 1) {
                        select.remove(select.length - 1);
                    }
                }


            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });

    }

}


function solicitarCita() {

    var idPaciente = 0;
    var idMedicoHorario = $("#selIdMedicoHorario").val();
    var numero = $("#txtNumero").val();
    var fecha = $("#dtFechaCita").val();

    if (idMedicoHorario != -1 && numero != "" && fecha != "" ) {
        $.ajax({
            type: 'POST',
            url: "/RegistrarPaciente/SolicitarCita",
            data: {
                idPaciente: idPaciente, idMedicoHorario: idMedicoHorario,
                numero: numero, fecha: fecha
            },
            success: function (data) {

                var response = data.d[1];

                switch (response) {
                    case "Success":
                        $('#myModal').modal('show');
                        info = "<p>Operacion exitosa</p>";
                        $('#avisos').append(info);
                        limpiar();
                        listar();
                        break;
                    case undefined:
                        alert("Error en la operacion.");
                        break;
                }


            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    } else {

        $('#myModal').modal('show');
        info = "<p>Por favor ingresa todos los datos</p>";
        $('#avisos').append(info);

    }
}
