//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//ocultar menu cuando se elije una opcion
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo barras
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras
let html = document.getElementById("item1");
crearBarra(item1);
let javascript = document.getElementById("item2");
crearBarra(item2);
let wordpress = document.getElementById("item3");
crearBarra(item3);
let photoshop = document.getElementById("item4");
crearBarra(item4);
let php = document.getElementById("item5");
crearBarra(item5);
let ilustrator = document.getElementById("item6");
crearBarra(item6);

let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoConocimientos(){
    var conocimientos = document.getElementById("conocimientos");
    var distancia_skills = window.innerHeight - conocimientos.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalItem1 = setInterval(function(){
            pintarBarra(item1, 16, 0, intervalItem1);
        },100);
        const intervalItem2 = setInterval(function(){
            pintarBarra(item2, 11, 1, intervalItem2);
        },100);
        const intervalItem3 = setInterval(function(){
            pintarBarra(item3, 11, 2, intervalItem3);
        },100);
        const intervalItem4 = setInterval(function(){
            pintarBarra(item4, 15, 3, intervalItem4);
        },100);
        const intervalItem5 = setInterval(function(){
            pintarBarra(item5, 16, 4, intervalItem5);
        },100);
        const intervalItem6 = setInterval(function(){
            pintarBarra(item6, 11, 5, intervalItem6);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#3f6b85";
    }else{
        clearInterval(interval)
    }
}

//detecto la ruedita del mouse para aplicar la animación
window.onscroll = function(){
    efectoConocimientos();
}