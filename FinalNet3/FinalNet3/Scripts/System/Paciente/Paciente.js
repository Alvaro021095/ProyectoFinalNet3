
$(document).ready(function () {
   // listar();
    cargarPais();
    cargarTipoDocumento();
    cargarTipoPaciente();
    cargarIngresoEconomico();
});

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
    var id_municipio = $("#selIdMunicipio").val();
    var usuario = $("#txtUsuario").val();
    var password = $("#txtPassword").val();
    var estrato = $("#txtEstrato").val();
    var sisben = $("#txtSisben").val();
    var id_cotizante = 0;
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


function cargarMunicipio(seleccion) {

    var depto = $("#selDepartamento").val();

    if (depto != -1) {

        $.ajax({
            type: 'POST',
            url: "/Municipio/LoadMunicipio",
            data: { id_departamento: depto },
            success: function (data) {

                if (data.d.length > 0) {

                    var qantity = (data.d.length);
                    var rows = parseInt(data.d[qantity - 1]);
                    var cols = parseInt(data.d[qantity - 2]);
                    qantity -= 2;

                    var select = document.getElementById("selIdMunicipio");

                    while (select.length > 1) {
                        select.remove(select.length - 1);
                    }

                    var opt = null;

                    for (var k = 0; k < qantity; k += cols) {
                        opt = new Option(data.d[k + 1], data.d[k]);
                        select.options[select.length] = opt;
                    }

                    if (seleccion) {
                        $("#selIdMunicipio").val(seleccion);
                    } else {
                        select.value = -1;
                    }

                } else {

                    var select = document.getElementById("selIdMunicipio");

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



function cargarTipoDocumento() {

    $.ajax({
        type: 'POST',
        url: "/TipoDocumento/LoadTipoDocumento",
        data: "",
        success: function (data) {

            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;

                var select = document.getElementById("selIdTipoDocumento");

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


function cargarTipoPaciente() {

    $.ajax({
        type: 'POST',
        url: "/TipoAfiliacion/LoadTipoPaciente",
        data: "",
        success: function (data) {

            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;

                var select = document.getElementById("selIdTipoPaciente");

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


function cargarIngresoEconomico() {

    $.ajax({
        type: 'POST',
        url: "/IngresoEconomico/LoadIngresoEconomico",
        data: "",
        success: function (data) {

            if (data.d.length > 0) {


                var qantity = (data.d.length);
                var rows = parseInt(data.d[qantity - 1]);
                var cols = parseInt(data.d[qantity - 2]);
                qantity -= 2;

                var select = document.getElementById("selIdIngreso");

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



    /* Acobijar un usuario beneficiario */
function cobijarUsuario() {

        var idPaciente = 0;
        var documento = $("#txtDocumento").val();

        if (documento != "") {
            $.ajax({
                type: 'POST',
                url: "/RegistrarPaciente/CobijarUsuario",
                data: {
                    idPaciente: idPaciente, documento: documento
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

//function buscarPacienteNoCotizante() {
//    console.log('Historial.establecerBuscadorCliente()');

//    var documento = $("#criterio-busqueda").val();


//    //var options = {

//    //    url: function (phrase) {
//    //        return "/RegistrarPaciente/buscarPacienteNoCotizante/";
//    //    },

//    //    getValue: function (element) {
//    //        return element.name;
//    //    },

//    //    ajaxSettings: {
//    //        dataType: "json",
//    //        method: "POST",
//    //        data: {
//    //            documento: documento
//    //        }
//    //    },

//    //    preparePostData: function (data) {
//    //        data.phrase = $("#criterio-busqueda").val();
//    //        return data;
//    //    },

//    //    requestDelay: 400
//    //};

//    //$("#criterio-busqueda").easyAutocomplete(options);


   

    

//    var options = {

//        url: function (phrase) {
//            return "/RegistrarPaciente/buscarPacienteNoCotizante/";
//        },

//        getValue: function (element) {
//            return element.nombre;
//        },

//        ajaxSettings: {
//            dataType: "json",
//            method: "POST",
//            data: {
//                documento: documento
//            }
//        },

//        preparePostData: function (data) {
//            data.criterio = $("#criterio-busqueda").val();
//            console.log(data);
//            return data;
//        },
//        list: {

//            onSelectItemEvent: function () {
//                var value = $("#criterio-busqueda").getSelectedItemData().patients_id;
//                console.log(value);
//                $("#patients_id").val(value).trigger('input');
//                $("#users_id").val($("#criterio-busqueda").getSelectedItemData().users_id).trigger('input');
//                $("#identification").val($("#criterio-busqueda").getSelectedItemData().identification).trigger('input');

//            }
//        },
//        requestDelay: 400,
//        //theme: "plate-dark"
//    };

//    $("#criterio-busqueda").easyAutocomplete(options);
//}

//buscarPacienteNoCotizante();




