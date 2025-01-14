let indexOfSlide = 1;

function slideShower(number, className) {
    let i;
    let slides = document.getElementsByClassName(className);

    if (number > slides.length) {
        indexOfSlide = 1;
    }

    if (number < 1) {
        indexOfSlide = slides.length; 
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }

    slides[indexOfSlide - 1].style.display = "block"; 
}


function moveSlides(step, className) {
    slideShower(indexOfSlide += step, className);
}


slideShower(indexOfSlide, "asus");
slideShower(indexOfSlide, "samsung");
slideShower(indexOfSlide, "google");
slideShower(indexOfSlide, "iPhone");
