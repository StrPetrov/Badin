let elDisplayedImage = document.querySelector("#displayedImage");
const elGalleryOpened = document.querySelectorAll(".galleryOpened");
const wrapper = document.querySelectorAll(".wrap")
const elImages = document.querySelectorAll(".displayImg");
const elArrows = document.querySelectorAll(".arrowContainer");
let currentImg;

elGalleryOpened[0].addEventListener("click", hideGalleryOpened);

function hideGalleryOpened() {
    elGalleryOpened[0].style.cssText = "visibility: hidden;";
}

for (let i = 0; i < elImages.length; i++) {
    wrapper[i].addEventListener("click", () => {
      if (window.innerWidth >= 768) {
        elDisplayedImage.setAttribute("src", elImages[i].getAttribute("src"));
        elGalleryOpened[0].style.cssText = "visibility: visible;";
        currentImg = i;
        hideArrows();
      }
    });
}

elArrows[0].addEventListener("click", (e) => {
    elDisplayedImage.setAttribute("src", elImages[currentImg - 1].getAttribute("src"));
    currentImg -= 1;
    hideArrows();
    e.stopPropagation();
});

function hideArrows() {
    if (currentImg === 0) {
      elArrows[0].style.cssText = "visibility: hidden;";
      elArrows[1].style.cssText = "visibility: inherit;";
    } else if (currentImg === 5) {
      elArrows[0].style.cssText = "visibility: inherit;";
      elArrows[1].style.cssText = "visibility: hidden;";
    } else {
      elArrows[0].style.cssText = "visibility: inherit;";
      elArrows[1].style.cssText = "visibility: inherit;";
    } 
}

elArrows[1].addEventListener("click", (e) => {
    elDisplayedImage.setAttribute("src", elImages[currentImg + 1].getAttribute("src"));
    currentImg += 1;
    hideArrows();
    e.stopPropagation();
});
   


