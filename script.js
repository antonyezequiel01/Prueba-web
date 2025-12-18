const abrir = document.getElementById("abrirCarrusel");
const modal = document.getElementById("modalCarrusel");
const cerrar = document.getElementById("cerrarCarrusel");
const img = document.getElementById("imgCarrusel");
const texto = document.getElementById("textoCarrusel");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

const imagenes = [
  { src: "img/PORTADA.png", texto: "Portada." },
  { src: "img/Avatar1.png", texto: "Avatar: Astronauta marciano." },
  { src: "img/Canción.png", texto: "Canción: Flaca - Andrés Calamaro." },
  { src: "img/Patito1.png", texto: "Portada infantil: El Patito Feo." },
  { src: "img/Vinilo.pdf", texto: "Disco vinilo: Kid A - Radiohead." },
  { src: "img/Fantasma1.png", texto: "El Fantasma de la Ópera." },
  { src: "img/Naranja.png", texto: "Concepto base: Naranja." },
  { src: "img/Película1.png", texto: "Poster: Freddy vs Jason." },
  { src: "img/8.Portada1.png", texto: "Serie portada: Rebelión en la Granja." },
  { src: "img/8.Portada2.png", texto: "Serie portada: Robinson Crusoe." },
  { src: "img/8.Portada3.png", texto: "Serie portada: La Isla del Tesoro." },
  { src: "img/8.Portada4.png", texto: "Serie portada: Los Viajes de Gulliver." },
  { src: "img/8.Portada5.png", texto: "Serie portada: El Señor de las Moscas." }
];

let index = 0;

function mostrar() {
  img.src = imagenes[index].src;
  texto.textContent = imagenes[index].texto;
}

abrir.addEventListener("click", () => {
  modal.classList.add("activo");
  index = 0;
  mostrar();
});

cerrar.addEventListener("click", () => {
  modal.classList.remove("activo");
});

next.addEventListener("click", () => {
  index = (index + 1) % imagenes.length;
  mostrar();
});

prev.addEventListener("click", () => {
  index = (index - 1 + imagenes.length) % imagenes.length;
  mostrar();
});
