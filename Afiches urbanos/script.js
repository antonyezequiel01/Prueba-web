document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalImg = document.querySelector(".modal-img");
  const closeBtn = document.querySelector(".close");
  const items = document.querySelectorAll(".item img");

  // Abrir imagen con animación
  items.forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;

      // Reiniciar animación
      modalImg.style.animation = "none";
      modal.offsetHeight; // forzar reflow
      modalImg.style.animation = "zoomIn 0.4s ease forwards";
    });
  });

  // Cerrar con X
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Cerrar clickeando fuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
});
