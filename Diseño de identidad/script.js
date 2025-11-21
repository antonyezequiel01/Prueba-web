document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.querySelector(".modal-img");
    const closeBtn = document.querySelector(".close");
    const items = document.querySelectorAll(".clickable-img, .item img");

    // Abrir modal con imagen
    items.forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;

            modalImg.style.animation = "none";
            void modalImg.offsetWidth;
            modalImg.style.animation = "zoomIn 0.4s ease forwards";
        });
    });

    // Cerrar modal con X
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Cerrar modal clickeando fuera
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.style.display = "none";
    });
});

// ---------------------------
// MODAL ESPECIAL (una imagen que abre carrusel de 2)
// ---------------------------

const modalEspecial = document.getElementById("modalEspecial");
const abrirModalEspecial = document.querySelector(".abrir-modal-especial");
const cerrarEspecial = document.querySelector(".cerrar-especial");
const imagenEspecial = document.getElementById("imagenEspecial");

const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnFlip = document.getElementById("btnFlip");

// Imágenes del modal
const imagenesEspeciales = [
    "../img/Afichejuego1.png",
    "../img/Afichejuego2.png"
];

let indiceActual = 0;
let rotacion = 0; // Guardamos el ángulo de rotación

// Abrir modal
abrirModalEspecial.addEventListener("click", () => {
    modalEspecial.style.display = "flex";
    imagenEspecial.src = imagenesEspeciales[indiceActual];
    imagenEspecial.style.transform = `rotate(0deg)`; // reset rotación al abrir
    rotacion = 0;
});

// Cerrar modal
cerrarEspecial.addEventListener("click", () => {
    modalEspecial.style.display = "none";
    imagenEspecial.style.transform = `rotate(0deg)`; // reset rotación al cerrar
    rotacion = 0;
});

// Cambiar imagen
btnSiguiente.addEventListener("click", () => {
    indiceActual = (indiceActual + 1) % imagenesEspeciales.length;
    imagenEspecial.src = imagenesEspeciales[indiceActual];
    imagenEspecial.style.transform = `rotate(0deg)`; // reset rotación al cambiar imagen
    rotacion = 0;
});

btnAnterior.addEventListener("click", () => {
    indiceActual =
        indiceActual === 0
            ? imagenesEspeciales.length - 1
            : indiceActual - 1;
    imagenEspecial.src = imagenesEspeciales[indiceActual];
    imagenEspecial.style.transform = `rotate(0deg)`; // reset rotación al cambiar imagen
    rotacion = 0;
});

// Rotar imagen
btnFlip.addEventListener("click", () => {
    rotacion += 180; // suma 180 grados cada click
    imagenEspecial.style.transform = `rotate(${rotacion}deg)`;
});

// Cerrar clic afuera
modalEspecial.addEventListener("click", (e) => {
    if (e.target === modalEspecial) {
        modalEspecial.style.display = "none";
        imagenEspecial.style.transform = `rotate(0deg)`; // reset rotación
        rotacion = 0;
    }
});

// --------------------------------------
// MODAL HORIZONTAL — CARRUSEL NUEVO
// --------------------------------------
const modalHorizontal = document.getElementById("modalHorizontal");
const cerrarHorizontal = document.querySelector(".cerrar-horizontal");
const horizontalImg = document.getElementById("imgHorizontal");

// Imagen que abre este modal (la horizontal grande)
const imgHorizontal = document.querySelector(".abrir-modal-horizontal");

// Lista de imágenes reales
const imagenesHorizontales = [
    
    "../img/Pantalla1.png",
    "../img/Pantalla2.png",
    "../img/Pantalla3.png",
    "../img/Pantalla4.png",
    "../img/Pantalla5.png",
    "../img/Pantalla6.png",
    "../img/Pantalla7.png",
    "../img/Pantalla8.png",
    "../img/Pantalla9.png",
    "../img/Pantalla10.png",
    "../img/Pantalla11.png",
    "../img/Pantalla12.png",
    "../img/Pantalla13.png",
    "../img/Pantalla14.png",
    "../img/Pantalla15.png",
];

let indiceH = 0;

// Abrir modal al clic
imgHorizontal.addEventListener("click", () => {
    modalHorizontal.style.display = "flex";
    horizontalImg.src = imagenesHorizontales[indiceH];
});

// Cerrar con la X
cerrarHorizontal.addEventListener("click", () => {
    modalHorizontal.style.display = "none";
});

// Botón siguiente
document.getElementById("hSiguiente").addEventListener("click", () => {
    indiceH = (indiceH + 1) % imagenesHorizontales.length;
    horizontalImg.src = imagenesHorizontales[indiceH];
});

// Botón anterior
document.getElementById("hAnterior").addEventListener("click", () => {
    indiceH = indiceH === 0 ? imagenesHorizontales.length - 1 : indiceH - 1;
    horizontalImg.src = imagenesHorizontales[indiceH];
});

// Cerrar haciendo clic afuera
modalHorizontal.addEventListener("click", (e) => {
    if (e.target === modalHorizontal) {
        modalHorizontal.style.display = "none";
    }
});

// CARRUSEL SIMPLE
const carruselImg = document.getElementById("carrusel-img");
const btnCarruselPrev = document.getElementById("carrusel-prev");
const btnCarruselNext = document.getElementById("carrusel-next");

// Lista de imágenes
const carruselImagenes = [
    "../img/Pantalla16.png",
    "../img/Pantalla17.png",
    "../img/Pantalla18.png",
    "../img/Pantalla19.png"
];

let carruselIndex = 0;

// Función para actualizar la imagen
function actualizarCarrusel() {
    // Cambiamos la src directamente sin timeout para evitar errores
    carruselImg.src = carruselImagenes[carruselIndex];
}

// Botón siguiente
btnCarruselNext.addEventListener("click", () => {
    carruselIndex++;
    if (carruselIndex >= carruselImagenes.length) carruselIndex = 0;
    actualizarCarrusel();
});

// Botón anterior
btnCarruselPrev.addEventListener("click", () => {
    carruselIndex--;
    if (carruselIndex < 0) carruselIndex = carruselImagenes.length - 1;
    actualizarCarrusel();
});

// Inicializamos carrusel
actualizarCarrusel();
