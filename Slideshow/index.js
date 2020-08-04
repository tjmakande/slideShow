let slides = document.querySelectorAll('.Slide'); 
let currentSlide = 0; 
let timer;

//restartable timer
let BeginSlide = () => {
    clearInterval(timer);
    timer = setInterval( () => {
                currentSlide++;
                slides[currentSlide-1].classList.remove('showing')
                currentSlide >= slides.length ? currentSlide = 0 : currentSlide;
                slides[currentSlide].classList.add('showing')
            }, 1000 );
}
BeginSlide();

//display Slide
let switchSlide = (lastSlide, nextSlide) => {
    slides[lastSlide].classList.remove('showing');
    slides[nextSlide].classList.add('showing');
    BeginSlide()
}

//next slide click
document.querySelector('.Next').addEventListener('click', () => {
    let temp = currentSlide;
    currentSlide == 4 ? currentSlide = 0 : currentslide = currentSlide++;
    switchSlide(temp, currentSlide);
});

//Previous Slide click
document.querySelector('.Previous').addEventListener('click', () => {
    let temp = currentSlide;
    currentSlide == 0 ? currentSlide = slides.length - 1 : currentSlide--;
    switchSlide(temp, currentSlide);
});




