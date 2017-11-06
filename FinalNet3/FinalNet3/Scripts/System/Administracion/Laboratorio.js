// Cuando se encuentra listo el doc esto es lo primero que se ejecutara
$(document).ready(function () {
    listar();
});


/*Limpia los campos*/
function limpiar() {
    $("#txtId").val("");
    $("#txtNombre").val("");
    $("#txtDescripcion").val("");
}


/* Guarda informacion */
function guardar() {

    var id = ($("#txtId").val() == "") ? -1 : $("#txtId").val();
    var nombre = $("#txtNombre").val();
    var descripcion = $("#txtDescripcion").val();

    if (nombre != "" && descripcion != "") {
        $.ajax({
            type: 'POST',
            url: "/Laboratorio/SaveInfo",
            data: { id: id, nombre: nombre, descripcion: descripcion },
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







/* Busca informacion */
function buscar() {

    var nombre = $("#txtNombre").val();

    if (nombre != "") {

        $.ajax({
            type: 'POST',
            url: "/Laboratorio/SearchInfo",
            data: { nombre: nombre },
            success: function (data) {
                if (data.d.length > 0) {
                    $("#txtId").val(data.d[0]);
                    $("#txtNombre").val(data.d[1]);
                    $("#txtDescripcion").val(data.d[2]);
                } else {
                    alert("No se encuentra")
                }


            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error detectado: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    } else {
        alert("Ingresa el dato de busqueda");
    }
}



/* Elimina informacion */
function eliminar() {

    var id = ($("#txtId").val() == "") ? -1 : $("#txtId").val();

    if (id != "-1") {

        $.ajax({
            type: 'POST',
            url: "/Laboratorio/DeleteInfo",
            data: { id: id },
            success: function (data) {

                var response = data.d[1];

                switch (response) {
                    case "Success":
                        alert("Operacion exitosa");
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
        alert("Debe buscar primero el dato a eliminar");
    }
}





/* Lista informacion */
function listar() {

    $.ajax({
        type: 'POST',
        url: "/Laboratorio/ListInfo",
        data: "",
        success: function (data) {


            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;


                var list = "<table class='table table-hover'>";

                list += "<thead><tr>";
                list += "<th>Nombre</th>";
                list += "<th>Descripcion</th>";
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