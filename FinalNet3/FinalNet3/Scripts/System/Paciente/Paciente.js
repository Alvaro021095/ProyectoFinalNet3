/*Limpia los campos*/
function limpiar() {
    $("#txtId").val("");
    $("#txtNombre").val("");
    $("#txtApellido").val("");
    $("#txtDocumento").val("");
    $("#txtCorreo").val("");
    $("#dtFechaNacimiento").val("");
    $("#selIdTipoDocumento").val("-1");
    $("#selIdMunicipio").val("-1");
    $("#txtUsuario").val("");
    $("#txtPassword").val("");
    $("#txtEstrato").val("");
    $("#txtSisben").val("");
    $("#selIdCotizante").val("-1");
    $("#selIdTipoPaciente").val("-1");
    $("#selIdIngreso").val("-1");
}


/* Guarda informacion */
function guardar() {

    var id = ($("#txtId").val() == "") ? -1 : $("#txtId").val();
    var nombre = $("#txtNombre").val();
    var apellido = $("#txtApellido").val();
    var documento = $("#txtDocumento").val();
    var correo = $("#txtCorreo").val();
    var fecha_nacimiento = $("#dtFechaNacimiento").val();
    var id_tipo_doc = $("#selIdTipoDocumento").val();
    var id_municipio = $("#selId_Municipio").val();
    var usuario = $("#txtUsuario").val();
    var password = $("#txtPassword").val();
    var estrato = $("#txtEstrato").val();
    var sisben = $("#txtSisben").val();
    var id_cotizante = $("#selIdCotizante").val();
    var id_tipo_paciente = $("#selIdTipoPaciente").val();
    var id_ingreso = $("#selIdIngreso").val();

    if (nombre != "" && apellido != "" && documento != "" && correo != "" && fecha_nacimiento != "" &&
        id_tipo_doc != -1 && id_municipio != -1 && usuario != "" && password != "" && estrato != -1 &&
        sisben != -1 && id_cotizante != -1 && id_tipo_paciente != -1 && id_ingreso != -1)  {
        $.ajax({
            type: 'POST',
            url: "/RegistrarPaciente/SaveInfo",
            data: {
                id: id, nombre: nombre, apellido: apellido, documento: documento, correo: correo,
                fecha_nacimiento: fecha_nacimiento, idTipoDoc: id_tipo_doc, idMunicipio: id_municipio,
                usuario: usuario, password: password, estrato: estrato, sisben: sisben,
                idCotizante: id_cotizante,idTipoPac: id_tipo_paciente, idIngreso: id_ingreso
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


/* Busca informacion por el id de el usuario que este conectado*/
function buscar() {
    var id = $("#txtId").val();

    if (id != "") {

        $.ajax({
            type: 'POST',
            url: "/RegistrarPaciente/SearchInfo",
            data: { nombre: nombre },
            success: function (data) {
                if (data.d.length > 0) {
                    $("#txtNombre").val(data.d[0]);
                    $("#txtApellido").val(data.d[1]);
                    $("#txtDocumento").val(data.d[2]);
                    $("#txtCorreo").val(data.d[3]);
                    $("#dtFecha").val(data.d[4]);
                    $("#selTipoDocmento").val(data.d[5]);
                    $("#selPais").val(data.d[6]);
                    cargarDepartamento(data.d[7]);
                    cargarMunicipio(data.d[8]);
                    $("#txtUsuario").val(data.d[9]);
                    $("#txtPassword").val(data.d[10]);
                    $("#txtEstrato").val(data.d[11]);
                    $("#txtSisben").val(data.d[12]);
                    $("#selIdCotizante").val(data.d[13]);
                    $("#selIdTipoPaciente").val(data.d[14]);
                    $("#selIdIngreso").val(data.d[15]);

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



