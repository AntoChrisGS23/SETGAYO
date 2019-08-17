// Imports
//=require jquery/dist/jquery.min.js
//=require svg4everybody/dist/svg4everybody.min.js
//=require bootstrap/dist/js/bootstrap.js

svg4everybody();

// DOM
var MyApp = {
    form: {
        calificacion: function(e){
            $('#addCalif').click(function() {
                var estado = document.getElementById("estado").value;
                var tipo = document.getElementById("tipo").value;
                var valor = document.getElementById("valor").value;
                var i = 1;
                var fila = '<tr id="row' + i + '">' + '<td>' + i + '</td><td>' + estado + '</td><td>' + tipo + '</td><td>' + valor + '</td><td><button class="btn btn-warning" type="button" title="Editar"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-danger btn_remove" type="button" name="remove" id="' + i + '" title="Eliminar"><i class="fas fa-trash-alt"></i></button></td></tr>';
        
                i++;
                $('#tableCalif tr:last').after(fila);
                var nFilas = $("#tableCalif tr").length;
                document.getElementById("estado").value ="";
                document.getElementById("tipo").value = "";
                document.getElementById("valor").value = "";
                document.getElementById("estado").focus();
            });
            $(document).on('click', '.btn_remove', function() {
                var button_id = $(this).attr("id");
                $('#row' + button_id + '').remove();
                var nFilas = $("#tableCalif tr").length;
            });
        },

        idiomas: function(e){
            $('#addIdi').click(function() {
                var idioma = document.getElementById("idioma").value;
                var nivel = document.getElementById("nivel").value;
                var fecha = document.getElementById("fecha").value;
                var entrevistador = document.getElementById("entrevistador").value;
                var i = 1;
                var fila = '<tr id="rowId' + i + '">' + '<td>' + i + '</td><td>' + idioma + '</td><td>' + nivel + '</td><td>' + fecha + '</td>' + '<td>' + entrevistador + '</td><td><button class="btn btn-warning" type="button" title="Editar"><i class="fas fa-pencil-alt"></i></button><button class="btn btn-danger btn_remove2" type="button" name="remove2" id="' + i + '" title="Eliminar"><i class="fas fa-trash-alt"></i></button></td></tr>';
        
                i++;
                $('#tableIdi tr:last').after(fila);
                var nFilas = $("#tableIdi tr").length;
                document.getElementById("idioma").value ="";
                document.getElementById("nivel").value = "";
                document.getElementById("fecha").value = "";
                document.getElementById("entrevistador").value = "";
                document.getElementById("idioma").focus();
            });
            $(document).on('click', '.btn_remove2', function() {
                var button_id = $(this).attr("id");
                $('#rowId' + button_id + '').remove();
                var nFilas = $("#tableIdi tr").length;
            });
        }
    }
}

// On ready

$(function () {
    if ($('.form').length) {
        MyApp.form.calificacion();
        MyApp.form.idiomas();
    }
});