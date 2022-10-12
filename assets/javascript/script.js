
const imagesCarousel = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp"
];

const slides = document.querySelector(".slides");

let imgPosition = 0;

const previous = document.querySelector(".previous");

const next = document.querySelector(".next");

for ( let i = 0; i < imagesCarousel.length; i++) {

    const thisImage = document.createElement("img");

    thisImage.src = imagesCarousel[i];

    slides.appendChild(thisImage);

}

const allImages = document.querySelectorAll(".slides img");

allImages[imgPosition].classList.add("active");


previous.addEventListener("click", function () {

    allImages[imgPosition].classList.remove("active");

    imgPosition --;

    allImages[imgPosition].classList.add("active");
})

next.addEventListener("click", function () {

    allImages[imgPosition].classList.remove("active");

    imgPosition ++;

    allImages[imgPosition].classList.add("active");
})
