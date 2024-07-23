"use strict";
const btnBack = document.querySelector(".btn-back");
const btnNext = document.querySelector(".btn-next");
const images = document.querySelectorAll("img");
const gallery = document.querySelector(".gallery-container");
gallery.style.gridTemplateColumns = `repeat(${images.length}, 1fr)`;
// first wqy

// // previse button
// btnBack.addEventListener("click", () => {
//   let ActiveImg = getActiveImg();
//   let a = Number(ActiveImg[ActiveImg.length - 1]) - 1;
//   ActiveImg = "img-";
//   let nextImg = ActiveImg + a;
//   images.forEach((img) => {
//     if (a == 0) {
//       images[4].classList.add("active");
//     } else if (a < images.length) {
//       if (img.classList[0] == nextImg) {
//         img.classList.add("active");
//       }
//     }
//   });
// });
// // Next button
// btnNext.addEventListener("click", () => {
//   let ActiveImg = getActiveImg();
//   let a = Number(ActiveImg[ActiveImg.length - 1]) + 1;
//   ActiveImg = "img-";
//   let nextImg = ActiveImg + a;
//   images.forEach((img) => {
//     if (a < images.length + 1) {
//       if (img.classList[0] == nextImg) {
//         img.classList.add("active");
//       }
//     } else {
//       images[0].classList.add("active");
//     }
//   });
// });
// To get the active Img and remove the active class from it
function getActiveImg() {
  let activeImg;
  images.forEach((img) => {
    if (img.classList[1] == "active") {
      activeImg = img.classList[0];
      img.classList.remove("active");
    }
  });
  return activeImg;
}

// second way

let currentSlide = 0;
// btnNext.addEventListener("click", () => {
//   images[currentSlide].classList.remove("active");
//   if (currentSlide >= images.length - 1) {
//     currentSlide = 0;
//   } else {
//     currentSlide += 1;
//   }
//   images[currentSlide].classList.add("active");
// });
// btnBack.addEventListener("click", () => {
//   images[currentSlide].classList.remove("active");
//   if (currentSlide == 0) {
//     currentSlide = 4;
//   } else {
//     currentSlide -= 1;
//   }
//   images[currentSlide].classList.add("active");
// });

// third way

function goToSlide(n) {
  const imagesGallery = document.querySelectorAll(".gallery-container img");
  imagesGallery[currentSlide].classList.remove("active");
  images[currentSlide].classList.remove("active");
  currentSlide = (n + images.length) % images.length;
  images[currentSlide].classList.add("active");
  imagesGallery[currentSlide].classList.add("active");
}
btnBack.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
});
btnNext.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
});
images.forEach((slide, index) => {
  const thumbnail = slide.cloneNode();
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
    const imagesGallery = document.querySelectorAll(".gallery-container img");
    imagesGallery.forEach((img) => {
      img.classList.remove("active");
    });
    thumbnail.classList.add("active");
  });
  gallery.appendChild(thumbnail);
});
