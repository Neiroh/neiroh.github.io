var person = document.getElementById("person");
var enterprise = document.getElementById("enterprise");
var puesto = document.getElementById("puestoInput");

puesto.disabled = true;

enterprise.addEventListener("click", function () {
    console.log("punto");

    if (!enterprise.checked) {

        console.log("disabled");

        puesto.disabled = true;

        if (puesto.disabled == true) {
            puesto.setAttribute("required", "false")
        }

    } else {

        console.log("enabled");

        puesto.disabled = false;

        if (puesto.disabled == false) {
            puesto.setAttribute("required", "true")
        }

    }

});

person.addEventListener("click", () => {
    if (person.checked) {

        console.log("disabled");

        puesto.disabled = true;

        if (puesto.disabled == true) {
            puesto.setAttribute("required", "false")
        }

    } else {

        console.log("enabled");

        puesto.disabled = false;

        if (puesto.disabled == false) {
            puesto.setAttribute("required", "true")
        }

    }


});