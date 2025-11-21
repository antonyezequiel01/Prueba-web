document.querySelectorAll(".carrusel").forEach(carrusel => {
    const track = carrusel.querySelector(".carrusel-track");
    const imgs = track.querySelectorAll("img");
    const btnPrev = carrusel.querySelector(".prev");
    const btnNext = carrusel.querySelector(".next");

    let index = 0;

    function updateCarrusel() {
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    btnNext.addEventListener("click", () => {
        index = (index + 1) % imgs.length;
        updateCarrusel();
    });

    btnPrev.addEventListener("click", () => {
        index = (index - 1 + imgs.length) % imgs.length;
        updateCarrusel();
    });
});

document.querySelectorAll(".carrusel-mockup").forEach(carrusel => {
    
    const track = carrusel.querySelector(".carrusel-track");
    const slides = Array.from(track.children);
    const prev = carrusel.querySelector(".prev");
    const next = carrusel.querySelector(".next");

    let index = 0;

    function actualizar() {
        const width = carrusel.clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
    }

    next.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        actualizar();
    });

    prev.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        actualizar();
    });

    window.addEventListener("resize", actualizar);
});
