const home = document.getElementById('home');
const navBar = document.getElementById('navBar');
const carousel = document.getElementById('carousel');
const carousell = document.getElementById('carousell');
const offsetRem = 100;

// const hero = document.getElementById('hero');
// hero.addEventListener('click', function() {
//     window.location.href = ;
// })

window.addEventListener ('scroll', () => {
    if(navBar.getBoundingClientRect().top === 0) {
        //home.classList.remove('bg-transparent');
        navBar.classList.remove('bg-[#151e33]');
        //home.classList.add('bg-[#101727]')
        navBar.classList.add('bg-[#101727]');
        navBar.classList.add('shadow-md/70');
        //navBar.classList.add('brightness-120');
    }else {
        //home.classList.remove('bg-[#101727]');
        navBar.classList.remove('bg-[#101727]');
        //home.classList.add('bg-transparent');
        navBar.classList.add('bg-[#151e33]');
        navBar.classList.remove('shadow-md/70');
        //navBar.classList.remove('brightness-120');
    }
})

document.querySelectorAll('#navBar ul li a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        const targetY = target.getBoundingClientRect().top + window.scrollY - offsetRem;

        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        })
    })
})

// Gandakan
carousel.innerHTML += carousel.innerHTML;
carousell.innerHTML += carousell.innerHTML;

const speed = 2;
const speed2 = 2;
let rafId1 = null;
let rafId2 = null;

// Auto-scroll kiri > kanan
function autoScroll1() {
    carousel.scrollLeft += speed;
    const originalWidth = carousel.scrollWidth / 2;
    if (carousel.scrollLeft >= originalWidth) {
        carousel.scrollLeft = 0;
    }
    rafId1 = requestAnimationFrame(autoScroll1);
}

// Auto-scroll kanan > kiri
function autoScroll2() {
    carousell.scrollLeft -= speed2;
    const originalWidth = carousell.scrollWidth / 2;
    if (carousell.scrollLeft <= 0) {
        carousell.scrollLeft = originalWidth;
    }
    rafId2 = requestAnimationFrame(autoScroll2);
}

// Pause/resume carousel 1
function pauseScroll1() {
    cancelAnimationFrame(rafId1);
    rafId1 = null;
}
function resumeScroll1() {
    if (!rafId1) rafId1 = requestAnimationFrame(autoScroll1);
}

// Pause/resume carousel 2
function pauseScroll2() {
    cancelAnimationFrame(rafId2);
    rafId2 = null;
}
function resumeScroll2() {
    if (!rafId2) rafId2 = requestAnimationFrame(autoScroll2);
}

// Event carousel 1
carousel.addEventListener('pointerdown', pauseScroll1);
carousel.addEventListener('pointerup', () => setTimeout(resumeScroll1, 300));
carousel.addEventListener('pointercancel', () => setTimeout(resumeScroll1, 300));
carousel.addEventListener('mouseenter', pauseScroll1);
carousel.addEventListener('mouseleave', resumeScroll1);

// Event carousel 2
carousell.addEventListener('pointerdown', pauseScroll2);
carousell.addEventListener('pointerup', () => setTimeout(resumeScroll2, 300));
carousell.addEventListener('pointercancel', () => setTimeout(resumeScroll2, 300));
carousell.addEventListener('mouseenter', pauseScroll2);
carousell.addEventListener('mouseleave', resumeScroll2);


autoScroll1();
autoScroll2();

