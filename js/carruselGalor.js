var leftButton = document.getElementById("leftButton");
var rightButton = document.getElementById("rightButton");
var slide = document.getElementById("slider-container");
var imagenes = document.getElementById("imagenes");
var slideButtons = document.getElementById("slideButtons");

let navegador = navigator.userAgent;

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent
    .match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    console.log("Estás usando un dispositivo móvil!!");
    var movil = true;
} else {
    var movil = false;
    console.log("No estás usando un móvil");
}

console.log(movil);

if (!movil) {

    var posicionActual = 0;

    const img = [
        '../images/galor/portada.png',
        '../images/galor/foto.png',
        '../images/galor/registro.png',
    ];

    renderizarImagen();


    leftButton.addEventListener("click", () => {
        console.log("left");
        console.log(leftButton);
        console.log(slide);
        //slide.scrollLeft -= 100;

        if (posicionActual <= 0) {
            posicionActual = img.length - 1;
        } else {
            posicionActual--;
        }

        renderizarImagen();

    });

    rightButton.addEventListener("click", () => {
        console.log("right");
        console.log(rightButton);
        //slide.scrollLeft += 100;

        if (posicionActual >= img.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }

        renderizarImagen();
    });

    function renderizarImagen() {
        imagenes.innerHTML = "<img src=" + img[posicionActual] + ">";
    }


} else {

    slideButtons.removeChild(leftButton);
    slideButtons.removeChild(rightButton);

    slide.innerHTML = `<img src="../images/galor/portada.png" alt="galor-Home" class="slider-item">

    <img src="../images/galor/foto.png" alt="galor-Profile" class="slider-item">

    <img src="../images/galor/registro.png" alt="Fallon-Register" class="slider-item">`;

}