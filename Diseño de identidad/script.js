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
