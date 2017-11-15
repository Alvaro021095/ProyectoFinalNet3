/* Guarda informacion */
function Legalizar() {

    var documento = $("#txtDocumento").val();
    var numero = $("#txtNumero").val();

    if (documento != "" && numero != "") {
        $.ajax({
            type: 'POST',
            url: "/Cajero/Legalizar",
            data: { documento: documento, numero: numero },
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


/* Guarda informacion */
function Cancelar() {

    var documento = $("#txtDocumento").val();
    var numero = $("#txtNumero").val();     

    if (documento != "" && numero != "") {
        $.ajax({
            type: 'POST',
            url: "/Cajero/Cancelar",
            data: { documento: documento, numero: numero },
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