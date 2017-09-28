// Cuando se encuentra listo el doc esto es lo primero que se ejecutara
$(document).ready(function () {
    listar();
    cargarPais();
});


/*Limpia los campos*/
function limpiar() {
    $("#txtId").val("");
    $("#txtNombre").val("");
    $("#txtDescripcion").val("");
    $("#selPais").val("-1");
    $("#selDepartamento").val("-1");
}


/* Guarda informacion */
function guardar() {

    var id = ($("#txtId").val() == "") ? -1 : $("#txtId").val();
    var nombre = $("#txtNombre").val();
    var descripcion = $("#txtDescripcion").val();
    var departamento = $("#selDepartamento").val();

    if (nombre != "" && descripcion != "" && departamento != -1) {
        $.ajax({
            type: 'POST',
            url: "/Municipio/SaveInfo",
            data: {
                id: id, nombre: nombre, descripcion: descripcion, id_departamento: departamento
            },
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
                alert("Error detectado en guardar: " + textStatus + "\nExcepcion: " + errorThrown);
            }
        });
    } else {
        alert("Por favor ingresa todos los datossssssssss");
    }
}







/* Busca informacion */
function buscar() {
    var nombre = $("#txtNombre").val();

    if (nombre != "") {

        $.ajax({
            type: 'POST',
            url: "/Municipio/SearchInfo",
            data: { nombre: nombre },
            success: function (data) {
                if (data.d.length > 0) {
                    $("#txtId").val(data.d[0]);
                    $("#txtNombre").val(data.d[1]);
                    $("#txtDescripcion").val(data.d[2]);
                    $("#selPais").val(data.d[3]);
                    cargarDepartamento(data.d[4]);

                } else {
                    alert("No se encuentra")
                }


            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert("Error detectado en buscar: " + textStatus + "\nExcepcion: " + errorThrown);
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
            url: "/Municipio/DeleteInfo",
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
                alert("Error detectado en eliminar: " + textStatus + "\nExcepcion: " + errorThrown);
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
        url: "/Municipio/ListInfo",
        data: "",
        success: function (data) {


            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;


                var list = "<table class='listado'>";

                list += "<tr>";
                list += "<th>Nombre</th>";
                list += "<th>Descripcion</th>";
                list += "<th>Pais</th>";
                list += "<th>Departamento</th>";
                list += "</tr>";

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
            alert("Error detectado en listar: " + textStatus + "\nExcepcion: " + errorThrown);
        }
    });
}



function cargarDepartamento(seleccion) {

    var pais = $("#selPais").val();

    if (pais != -1) {

        $.ajax({
            type: 'POST',
            url: "/Municipio/LoadDepartamento",
            data: { id_pais: pais },
            success: function (data) {

                if (data.d.length > 0) {

                    var qantity = (data.d.length);
                    var rows = parseInt(data.d[qantity - 1]);
                    var cols = parseInt(data.d[qantity - 2]);
                    qantity -= 2;

                    var select = document.getElementById("selDepartamento");

                    while (select.length > 1) {
                        select.remove(select.length - 1);
                    }

                    var opt = null;

                    for (var k = 0; k < qantity; k += cols) {
                        opt = new Option(data.d[k + 1], data.d[k]);
                        select.options[select.length] = opt;
                    }

                    if (seleccion) {
                        $("#selDepartamento").val(seleccion);
                    } else {
                        select.value = -1;
                    }

                } else {

                    var select = document.getElementById("selDepartamento");

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



/* Carga en un combo los departamentos */
function cargarPais() {

    $.ajax({
        type: 'POST',
        url: "/Departamento/LoadPais",
        data: "",
        success: function (data) {

            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;

                var select = document.getElementById("selPais");

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


