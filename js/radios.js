var person = document.getElementById("person");
var enterprise = document.getElementById("enterprise");
var puesto = document.getElementById("puesto");

if (person == null || person.length == 0) {

    if (enterprise == null || enterprise.length == 0) {

        puesto.style.display = "none";

    } else {

        puesto.style.display = "flex";

    }

} else {

    puesto.style.display = "none";

}