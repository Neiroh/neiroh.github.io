var person = document.getElementById("person");
var enterprise = document.getElementById("enterprise");
var puesto = document.getElementById("puesto");

puesto.style.display = "none";

enterprise.addEventListener("click", function () {
    console.log("punto");

    if (!enterprise.checked) {

        console.log("Punto2");

        puesto.style.display = "none";

    } else {

        console.log("punto3");

        puesto.style.display = "flex";

    }

});

person.addEventListener("click", () => {
    if (person.checked) {

        console.log("Punto2");

        puesto.style.display = "none";

    } else {

        console.log("punto3");

        puesto.style.display = "flex";

    }
});