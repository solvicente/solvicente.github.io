// Definimos un array de objetos "perros" con información de cada perro
const perros = [
    {   // Propiedades del perro
        id:1,
        nombre: 'TOTO',
        imagen: 'img/img_galeria/Field Spaniel.jpg',
        raza: 'Field Spaniel',
        edad: 12,
        sexo: 'Macho',
        tamano:'Grande',
        mapa:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26003.280958601932!2d-60.86608744674975!3d-35.44463987143777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0fd3dfa42615%3A0xcc37005aedf7383a!2sEL%20REFUGIO%20casa%20quinta!5e0!3m2!1ses-419!2sar!4v1697994565777!5m2!1ses-419!',
    },
    {
        id:2,
        nombre: 'ROSITA',
        imagen: 'img/img_galeria/Beagle2.jpg',
        raza: 'Beagle',
        edad: 6,
        sexo: 'Hembra',
        tamano:'Mediano',
        mapa:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26003.280958601932!2d-60.86608744674975!3d-35.44463987143777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0def12035e93%3A0x384325474c7d7a3d!2sParque%20Gral.%20San%20Martin%2C%209%20De%20Julio%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1697994830190!5m2!1ses-419!2sar',
    },
    {
        id:3,
        nombre: 'ZALO',
        imagen: 'img/img_galeria/Border Collie1.jpg',
        raza: 'Border Collie',
        edad: 5,
        sexo: 'Macho',
        tamano:'Grande',
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26003.280958601932!2d-60.86608744674975!3d-35.44463987143777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0d1492fd8527%3A0x605314497b958fea!2sCirco%20Servian!5e0!3m2!1ses-419!2sar!4v1697995145824!5m2!1ses-419!2sar",
    },
    {
        id:4,
        nombre: 'MANOLO',
        imagen: 'img/img_galeria/Border Collie2.jpg',
        raza: 'Border Collie',
        edad: 12,
        sexo: 'Macho',
        tamano:'Grande',
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26003.280958601932!2d-60.86608744674975!3d-35.44463987143777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a333c58bc2d49b%3A0xdc771263f7e61d29!2sHuertARG!5e0!3m2!1ses-419!2sar!4v1697995324770!5m2!1ses-419!2sar",
    },
    {
        id:5,
        nombre: 'RUFO',
        imagen: 'img/img_galeria/Labrador Retriever1.jpg',
        raza: 'Labrador Retriever',
        edad: 10,
        sexo: 'Macho',
        tamano:'Grande',
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25991.675868280563!2d-60.86608744674975!3d-35.480546266358196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0c3c2d331e0f%3A0x5f338523817ddf74!2sMaria%20Luisa%20Restaurante%20%26%20Eventos!5e0!3m2!1ses-419!2sar!4v1697995592802!5m2!1ses-419!2sar",
    },
    {
        id:6,
        nombre: 'MACA',
        imagen: 'img/img_galeria/Labrador Retriever2.jpg',
        raza: 'Labrador Retriever',
        edad: 4,
        sexo: 'Hembra',
        tamano:'Grande',
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25991.675868280563!2d-60.86608744674975!3d-35.480546266358196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0de7b56694ad%3A0x2fcf1f0afcc9b0b8!2sLa%20Esquina%20Bar!5e0!3m2!1ses-419!2sar!4v1697996339337!5m2!1ses-419!2sar",
    },
    {
        id:7,
        nombre: 'TORIBIO',
        imagen: 'img/img_galeria/Old English Sheepdog.jpg',
        raza: 'Old English Sheepdog',
        edad: 14,
        sexo: 'Macho',
        tamano:'Grande',
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26007.332840136984!2d-60.91295100265798!3d-35.43209581746194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf13820ee7fd5b%3A0x38ba58dc53bf7b2a!2sBarrio%20Quinquela%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1697996622344!5m2!1ses-419!2sar",
    },
    {
        id:8,
        nombre: 'MALENA',
        imagen: 'img/img_galeria/Spanish Water Dog1.jpg',
        raza: 'Spanish Water Dog',
        edad: 10,
        sexo: 'Hembra',
        tamano:'Grande',
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26007.332840136984!2d-60.91295100265798!3d-35.43209581746194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0d7cd1839aeb%3A0x598056d10ea9b358!2sL%C3%A1cteos%20Aurora!5e0!3m2!1ses-419!2sar!4v1697996845123!5m2!1ses-419!2sar",
    },
    {
        id:9,
        nombre: 'SHIMI',
        imagen: 'img/img_galeria/Yorkshire Terrier.jpg',
        raza: 'Yorkshire Terrier',
        edad: 6,
        sexo: 'Hembra',
        tamano:'Grande',
        mapa:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26007.332840136984!2d-60.91295100265798!3d-35.43209581746194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bf0d7cd1839aeb%3A0x598056d10ea9b358!2sL%C3%A1cteos%20Aurora!5e0!3m2!1ses-419!2sar!4v1697996845123!5m2!1ses-419!2sar",
    },
];

// Obtenemos un elemento en el documento con el id "galeria-perros" y lo asignamos a "galeriaPerros"
const galeriaPerros = document.getElementById('galeria-perros');
// Iteramos a través de cada objeto "perro" en el array "perros"
  perros.forEach((perro) => {
    // Creamos un elemento "section" para representar la tarjeta del perro
    const tarjetaPerro = document.createElement('section');
    tarjetaPerro.classList.add('contenedor-hijo');
    // Creamos un elemento "article" para contener la imagen del perro
    const imagenPerro = document.createElement('article');
    imagenPerro.classList.add('caja-imagen');
    // Creamos un elemento "img" para mostrar la imagen del perro
    const img = document.createElement('img');
    img.src = perro.imagen;
    imagenPerro.appendChild(img);
    // Creamos un elemento "div" para mostrar el nombre del perro
    const nombrePerro = document.createElement('div');
    nombrePerro.classList.add('boton-nombre');
    nombrePerro.textContent = perro.nombre;
    // Creamos un elemento "article" para mostrar la información del perro
    const infoPerro = document.createElement('article');
    infoPerro.classList.add('caja-texto');
    // Creamos elementos "p" para mostrar información específica del perro, como ID, raza, edad, sexo y tamaño
    const idPerro = document.createElement('p');
    idPerro.textContent = `Identificador: ${perro.id}`;
    const razaPerro = document.createElement('p');
    razaPerro.textContent = `Raza: ${perro.raza}`;
    const edadPerro = document.createElement('p');
    edadPerro.textContent = `Edad: ${perro.edad} años`;
    const sexoPerro = document.createElement('p');
    sexoPerro.textContent = `Sexo: ${perro.sexo}`;
    const tamanoPerro = document.createElement('p');
    tamanoPerro.textContent = `Tamaño: ${perro.tamano}`;
    // Creamos un elemento "article" para mostrar un enlace "CONOCÉ MÁS"
    const enlacePerro = document.createElement('article');
    enlacePerro.classList.add('caja-info');
    const enlace = document.createElement('a');
    enlace.href = `conocelos.html?id=${perro.id}`;
    enlace.textContent = 'CONOCÉ MÁS';
    // Agregamos todos los elementos creados a la tarjeta del perro
    infoPerro.appendChild(idPerro);
    infoPerro.appendChild(edadPerro);
    infoPerro.appendChild(sexoPerro);
    infoPerro.appendChild(tamanoPerro);
    infoPerro.appendChild(razaPerro);
    enlacePerro.appendChild(enlace);
    tarjetaPerro.appendChild(imagenPerro);
    tarjetaPerro.appendChild(nombrePerro);
    tarjetaPerro.appendChild(infoPerro);
    tarjetaPerro.appendChild(enlacePerro);
    galeriaPerros.appendChild(tarjetaPerro);
  });
 
