const track = document.querySelector(".mockup-track");
const slides = Array.from(document.querySelectorAll(".mockup-slide"));
const nextBtn = document.querySelector(".mockup-next");
const prevBtn = document.querySelector(".mockup-prev");

let index = 0;
const total = slides.length;

// Función para mover carrusel (en bucle)
function updateCarousel() {
  index = (index + total) % total; // Bucle infinito
  track.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  index++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index--;
  updateCarousel();
});


// ---- MODAL ----
const modal = document.getElementById("mockup-modal");
const modalImg = document.querySelector(".mockup-modal-img");
const modalBg = document.querySelector(".mockup-modal-bg");

const modalClose = document.querySelector(".mockup-close");
const modalPrev = document.querySelector(".mockup-prev-modal");
const modalNext = document.querySelector(".mockup-next-modal");

let mockupIndex = 0;

// Abrir imagen
function openModal(i) {
  mockupIndex = i;
  modalImg.src = slides[i].querySelector("img").src;
  modal.classList.add("show");
}

// cerrar
function closeModal() {
  modal.classList.remove("show");
  modalImg.src = "";
}

// navegación
function modalNavigate(dir) {
  mockupIndex = (mockupIndex + dir + slides.length) % slides.length;
  modalImg.src = slides[mockupIndex].querySelector("img").src;
}

// eventos
slides.forEach((s, i) => {
  s.querySelector("img").addEventListener("click", () => openModal(i));
});

modalClose.addEventListener("click", closeModal);
modalBg.addEventListener("click", closeModal);

modalPrev.addEventListener("click", () => modalNavigate(-1));
modalNext.addEventListener("click", () => modalNavigate(1));

// teclado
document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("show")) return;

  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowLeft") modalNavigate(-1);
  if (e.key === "ArrowRight") modalNavigate(1);
});

/* ==========================================================
   ================== TROQUEL MODAL ==========================
   ========================================================== */

const troquelImages = [
  "../img/Troquel.png",      // reemplaza si querés otro orden
  "../img/TroquelCarne.png",
  "../img/TroquelPollo.png",
  "../img/TroquelCamarón.png"
];

const troquelThumb = document.querySelector(".troquel-img");
const troquelModal = document.getElementById("troquel-modal");
const troquelModalImg = document.querySelector(".troquel-modal-img");
const troquelModalBg = document.querySelector(".troquel-modal-bg");

const troquelClose = document.querySelector(".troquel-close");
const troquelPrev = document.querySelector(".troquel-prev");
const troquelNext = document.querySelector(".troquel-next");

let troquelIndex = 0;

function openTroquelModal(i = 0) {
  troquelIndex = i;
  troquelModalImg.src = troquelImages[troquelIndex];
  troquelModal.classList.add("show");
}

function closeTroquelModal() {
  troquelModal.classList.remove("show");
}

function navigateTroquel(dir) {
  troquelIndex = (troquelIndex + dir + troquelImages.length) % troquelImages.length;
  troquelModalImg.src = troquelImages[troquelIndex];
}

troquelThumb.addEventListener("click", () => openTroquelModal(0));

troquelClose.addEventListener("click", closeTroquelModal);
troquelModalBg.addEventListener("click", closeTroquelModal);

troquelPrev.addEventListener("click", () => navigateTroquel(-1));
troquelNext.addEventListener("click", () => navigateTroquel(1));

document.addEventListener("keydown", (e) => {
  if (!troquelModal.classList.contains("show")) return;

  if (e.key === "Escape") closeTroquelModal();
  if (e.key === "ArrowLeft") navigateTroquel(-1);
  if (e.key === "ArrowRight") navigateTroquel(1);
});
