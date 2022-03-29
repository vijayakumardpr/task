const slides = document.querySelectorAll(".carousel-item")
let slidePosition = 0
const totalSlides = slides.length

let prev = document.getElementById("carousel-button-prev")
let next = document.getElementById("carousel-button-next")

prev.addEventListener("click", moveToPrevSlide)
next.addEventListener("click", moveToNextSlide)

function moveToNextSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("carousel-item-visible")
  }

  if (slidePosition === totalSlides - 1) {
    slidePosition = 0
  } else {
    slidePosition = slidePosition + 1
  }

  slides[slidePosition].classList.add("carousel-item-visible")
}

function moveToPrevSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("carousel-item-visible")
  }

  if (slidePosition === 0) {
    slidePosition = totalSlides - 1
  } else {
    slidePosition = slidePosition - 1
  }
  slides[slidePosition].classList.add("carousel-item-visible")
}

// function hideAllSlides() {
//   for (let slide of slides) {
//     slide.classList.remove("carousel-item-visible")
//     slide.classList.add("carousel-item-hidden")
//   }
// }
