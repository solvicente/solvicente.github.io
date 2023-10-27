//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu() {
    if (menu_visible == false) {
        menu.style.display = "block";
        menu_visible = true;
    }
    else {
        menu.style.display = "none";
        menu_visible = false;
    }
}
//ocultar menu cuando se elije una opcion
let links = document.querySelectorAll("nav a");
for (var x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    }
}





// Mostrar u ocultar el botón de "subir
var prevScrollPos = window.scrollX;
var timer;
var subirButton = document.querySelector(".subir");

// Función para mostrar u ocultar el botón de "subir"
function toggleSubirButton() {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
        subirButton.style.display = "none";
    } else {
        subirButton.style.display = "block";
        /*clearTimeout(timer);
        timer = setTimeout(function () {
            subirButton.style.display = "none";
        }, 1500);*/
    }
    prevScrollPos = currentScrollPos;
}

// Agrega un listener para detectar el scroll
window.addEventListener("scroll", toggleSubirButton);

// Función para ir arriba cuando se hace clic en el botón de "subir"
subirButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});