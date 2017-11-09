/* Lista informacion */
function VerHistorialMedico() {

    $.ajax({
        type: 'POST',
        url: "/RegistrarPaciente/verHistorialMedico",
        data: "",
        success: function (data) {


            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;


                var list = "<table class='table table-hover'>";

                list += "<thead><tr>";
                list += "<th>Numero Cita</th>";
                list += "<th>Motivo Consulta</th>";
                list += "<th>Tratamiento</th>";
                list += "<th>Sintomas</th>";
                list += "<th>Diagnostico</th>";
                list += "</tr></thead>";

                for (var k = 0; k < qantity; k += cols) {

                    list += "<tr>";

                    for (j = 1; j < cols; j++) {
                        list += "<td>" + data.d[k + j] + "</td>";
                    }

                    list += "</tr>";

                }

                list += "</table>";


                $("#listado").html(list);

            } else {
                alert("No se encuentra")
            }


        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
        }
    });
}
