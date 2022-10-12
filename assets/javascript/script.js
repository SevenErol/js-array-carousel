
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

const thumbs = document.querySelector(".thumbs");

for ( let i = 0; i < imagesCarousel.length; i++) {

    const thisImage = document.createElement("img");

    thisImage.src = imagesCarousel[i];

    slides.appendChild(thisImage);

}

const allImages = document.querySelectorAll(".slides img");

allImages[imgPosition].classList.add("active");


previous.addEventListener("click", function () {

    allImages[imgPosition].classList.remove("active");

    allOverlay[imgPosition].classList.remove("no_overlay");

    imgPosition --;

    if (imgPosition < 0) {

        imgPosition = imagesCarousel.length -1;
        allImages[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");


    } else {

        allImages[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");

    }
})

next.addEventListener("click", function () {

    allImages[imgPosition].classList.remove("active");

    allOverlay[imgPosition].classList.remove("no_overlay");

    imgPosition ++;

    if (imgPosition > imagesCarousel.length -1) {

        imgPosition = 0;
        allImages[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");


    } else {

        allImages[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");

    }
})

for ( let i = 0; i < imagesCarousel.length; i++) {

    const singleThumb = document.createElement("div");

    const thumbImage = document.createElement("img");

    const overlay = document.createElement("div");

    singleThumb.classList.add("single_thumb");

    overlay.classList.add("overlay");

    thumbImage.src = imagesCarousel[i];

    thumbs.appendChild(singleThumb);

    singleThumb.appendChild(thumbImage);

    singleThumb.appendChild(overlay);

}

const allOverlay = document.querySelectorAll(".single_thumb div");

