let slidePosition = 0;

const slides = document.getElementsByClassName('carousel__item');
const textDetails = document.getElementsByClassName('carousel__txt__item');

const totalSlides = slides.length;
const totalDetails = textDetails.length;

//Find Button element at desktop to trigger slide movement functions
document.getElementById('carousel__button--desktop--next').addEventListener("click", function(){
    moveToNextSlide();
});

document.getElementById('carousel__button--desktop--previous').addEventListener("click", function(){
    moveToPreviousSlide();
});

//Find Button element at mobile to trigger slide movement functions
document.getElementById('carousel__button--mobile--next').addEventListener("click", function(){
    moveToNextSlide();
});

document.getElementById('carousel__button--mobile--previous').addEventListener("click", function(){
    moveToPreviousSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carousel__item--visible');
        slide.classList.add('carousel__item--hidden');
    }

    for (let textDetail of textDetails) {
        textDetail.classList.remove('carousel__item--visible');
        textDetail.classList.add('carousel__item--hidden');
    }

    slides[slidePosition].classList.add('carousel__item--visible');
    textDetails[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }

    updateSlidePosition();
}

function moveToPreviousSlide() {
    console.log("beginning of func " + slidePosition);
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    console.log("end of func " + slidePosition);

    updateSlidePosition();
}