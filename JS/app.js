console.log("hola");

//Que botón buscar limpie el formulario
$(document).ready(function(){
    $('#search-form').click(function(){
        $('#busqueda').val('');
    });
});




//-------------------------------------------------------------------------------------------------------------------------
//para que el rut ponga puntos y guión
function formatRut() {
    let rutInput = document.getElementById('rut-form');
    let rutValue = rutInput.value;

    //Eliminar cualquier carácter que no sea un número o una letra "k"
    rutValue = rutValue.replace(/[^0-9k]/gi, '');

    // Agregar puntos y guión al RUT
    if (rutValue.length > 1) {
        rutValue = rutValue.substring(0, rutValue.length - 1) + "-" + rutValue.substr(-1, 1);
      }
      if (rutValue.length > 5) {
        rutValue = rutValue.substring(0, rutValue.length - 4) + "." + rutValue.substr(-4, 3) + "-" + rutValue.substr(-1, 1);
      }
  
      // Actualizar el valor del campo del RUT
      rutInput.value = rutValue;
    }

let rutInput = document.getElementById("rut-form");
if (rutInput !== null) {
    rutInput.addEventListener("keyup", formatRut);
}

//-------------------------------------------------------------------------------------------------------------------------

//para que el correo tenga un arroba y un punto usando jquery
$(document).ready(function(){
    $("#email-form").keyup(function(){
        let email = $("#email-form").val();
        if (email.indexOf("@") > 0 && email.indexOf(".") > 0){
            $("#email-form").css("border-color", "green");
        } else {
            $("#email-form").css("border-color", "red");
        }
    });
});