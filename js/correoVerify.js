/**
 *
 * Pa que no se te cuelen los listos con el correo, tú sabe
 *
 */

var correo = /[\w+(\-\_\.\/)]+[@][\w]+\.[\w]+/;

/**
 *
 * Deshabilitamos el botón de registro pa que ningún payaso lo pulse mientras falten credenciales y tal
 *
 */

var submitButton = document.getElementById("submitButton");
var emailInput = document.getElementById("email");

submitButton.disabled = true;

submitButton.style.backgroundColor = "grey";

/**
 *
 * Recoge los datos del input de correo cada vez que se pulsa una tecla, para poder comprobarlo a tiempo real
 *
 */
emailInput.addEventListener("keyup", function () {
  var inputLoginCorreoValue = document.getElementById("email").value;

  if (!inputLoginCorreoValue.match(correo)) {
    emailInput.style.border = "1px solid red";
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "grey";
  } else {
    emailInput.style.border = "1px solid black";
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#FAF8F7";
  }
});
