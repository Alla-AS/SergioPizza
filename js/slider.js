let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const btnLeft =document.querySelector('.turn-left');
const btnRight =document.querySelector('.turn-right');
const slideInterval = 3000;
 
btnRight.onclick = () => {
    // slides[currentIndex].style.transform = 'translateX(50%)';
    slides[currentIndex].style.opacity = 0;
    
    // currentIndex = (currentIndex + 1) % slides.length;
    currentIndex++;
    if (currentIndex == slides.length) currentIndex = 0;

    // slides[currentIndex].style.transform = 'translateX(0)';
    slides[currentIndex].style.opacity = 1;
}

btnLeft.onclick = () => {
    slides[currentIndex].style.opacity = 0;
    if (currentIndex == 0) currentIndex = slides.length;

    currentIndex--;

    slides[currentIndex].style.opacity = 1;
}
 
