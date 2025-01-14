

let acerSlideIndex = 1;
acerAutoSlider();
function acerAutoSlider() {
  let i;
  let slides = document.getElementsByClassName("acer");
  for (i = 0; i < slides.length; i++) {
    console.log(slides[i]);
    slides[i].style.display = "none";
  }

  acerSlideIndex = acerSlideIndex + 1;

  if (acerSlideIndex > slides.length) {
    acerSlideIndex = 1;
  }
  slides[acerSlideIndex - 1].style.display = "block";
  setTimeout(acerAutoSlider, 1200);
}

let hpSlideIndex = 1;

hpAutoSlider();
function hpAutoSlider() {
  let i;
  let slides = document.getElementsByClassName("hp");
  for (i = 0; i < slides.length; i++) {
    console.log(slides[i]);
    slides[i].style.display = "none";
  }

  hpSlideIndex = hpSlideIndex + 1;

  if (hpSlideIndex > slides.length) {
    hpSlideIndex = 1;
  }
  slides[hpSlideIndex - 1].style.display = "block";
  setTimeout(hpAutoSlider, 1100);
}


let lenovoSlideIndex = 1;
lenovoAutoSlider();
function lenovoAutoSlider() {
  let i;
  let slides = document.getElementsByClassName("lenovo");
  for (i = 0; i < slides.length; i++) {
    console.log(slides[i]);
    slides[i].style.display = "none";
  }
  lenovoSlideIndex = lenovoSlideIndex + 1;
  if (lenovoSlideIndex > slides.length) {
    lenovoSlideIndex = 1;
  }
  slides[lenovoSlideIndex - 1].style.display = "block";
  setTimeout(lenovoAutoSlider, 1000);
}

let msiSlideIndex = 1;

msiAutoSlider();
function msiAutoSlider() {
  let i;
  let slides = document.getElementsByClassName("msi");
  for (i = 0; i < slides.length; i++) {
    console.log(slides[i]);
    slides[i].style.display = "none";
  }

  msiSlideIndex = msiSlideIndex + 1;

  if (msiSlideIndex > slides.length) {
    msiSlideIndex = 1;
  }
  slides[msiSlideIndex - 1].style.display = "block";
  setTimeout(msiAutoSlider, 1100);
}
