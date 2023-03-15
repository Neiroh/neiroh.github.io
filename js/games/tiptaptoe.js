var cuadricula = document.getElementById("tiptaptoeContainer");
var casilla = document.querySelectorAll(".cuadro");
var info = document.getElementById("info");
var reset = document.getElementById("reset");
var i = 1;

const WIN = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

function comprobar() {
    for (i = 0; i < casilla.length; i++) {
        if (casilla[WIN[i][0]].innerHTML === "X" && casilla[WIN[i][1]].innerHTML === "X" && casilla[WIN[i][2]].innerHTML === "X") {
            info.innerHTML = "X gana";
        }
        if (casilla[WIN[i][0]].innerHTML === "O" && casilla[WIN[i][1]].innerHTML === "O" && casilla[WIN[i][2]].innerHTML === "O") {
            info.innerHTML = "O gana";
        }
    }
}

function escribe() {
    casilla.forEach(boton => {
        if (i % 2 == 0) {
            boton.innerHTML = "X";
            boton.style = "cursor-pointer: none;";
            i++;
        } else {
            boton.innerHTML = "0";
            boton.style = "cursor-pointer: none;";
            i++;
        }
    });

    comprobar();
}

reset.addEventListener("click", () => {
    for (i = 0; i < casilla.length; i++) {
        casilla[i].innerHTML = "";
        casilla[i].style = "cursor-pointer: initial;";
    }
});

function pulsa() {
    escribe();
}