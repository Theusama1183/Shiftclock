const slider = document.querySelector('.slider');
const sliderDots = document.querySelectorAll('.slider-dot');
let slideIndex = 0;

function showSlide(index) {
    const slideWidth = slider.children[0].offsetWidth;
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
    slideIndex = index;

    // Update the active dot
    sliderDots.forEach((dot, dotIndex) => {
        if (dotIndex === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

showSlide(slideIndex);