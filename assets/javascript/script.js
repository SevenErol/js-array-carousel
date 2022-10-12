
const imagesCarousel = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

const slides = document.querySelector(".slides");

const imgPosition = 0;

for ( let i = 0; i < imagesCarousel.length; i++) {

    const thisImage = document.createElement("img");

    thisImage.src = imagesCarousel[i];

    slides.appendChild(thisImage);

}

const allImages = document.querySelectorAll(".slides img");

allImages[imgPosition].classList.add("active");

