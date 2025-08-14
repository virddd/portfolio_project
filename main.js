const carousel = document.getElementById('carousel');
const carousell = document.getElementById('carousell');

// Gandakan isi masing-masing
carousel.innerHTML += carousel.innerHTML;
carousell.innerHTML += carousell.innerHTML;

const speed = 2;
const speed2 = 2;
let rafId1 = null;
let rafId2 = null;

// Auto-scroll kiri → kanan
function autoScroll1() {
    carousel.scrollLeft += speed;
    const originalWidth = carousel.scrollWidth / 2;
    if (carousel.scrollLeft >= originalWidth) {
        carousel.scrollLeft = 0;
    }
    rafId1 = requestAnimationFrame(autoScroll1);
}

// Auto-scroll kanan ← kiri
function autoScroll2() {
    carousell.scrollLeft -= speed2;
    const originalWidth = carousell.scrollWidth / 2;
    if (carousell.scrollLeft <= 0) {
        carousell.scrollLeft = originalWidth;
    }
    rafId2 = requestAnimationFrame(autoScroll2);
}

// Pause/resume untuk carousel pertama
function pauseScroll1() {
    cancelAnimationFrame(rafId1);
    rafId1 = null;
}
function resumeScroll1() {
    if (!rafId1) rafId1 = requestAnimationFrame(autoScroll1);
}

// Pause/resume untuk carousel kedua
function pauseScroll2() {
    cancelAnimationFrame(rafId2);
    rafId2 = null;
}
function resumeScroll2() {
    if (!rafId2) rafId2 = requestAnimationFrame(autoScroll2);
}

// Event untuk carousel pertama
carousel.addEventListener('pointerdown', pauseScroll1);
carousel.addEventListener('pointerup', () => setTimeout(resumeScroll1, 300));
carousel.addEventListener('pointercancel', () => setTimeout(resumeScroll1, 300));
carousel.addEventListener('mouseenter', pauseScroll1);
carousel.addEventListener('mouseleave', resumeScroll1);

// Event untuk carousel kedua
carousell.addEventListener('pointerdown', pauseScroll2);
carousell.addEventListener('pointerup', () => setTimeout(resumeScroll2, 300));
carousell.addEventListener('pointercancel', () => setTimeout(resumeScroll2, 300));
carousell.addEventListener('mouseenter', pauseScroll2);
carousell.addEventListener('mouseleave', resumeScroll2);

// Mulai
autoScroll1();
autoScroll2();
