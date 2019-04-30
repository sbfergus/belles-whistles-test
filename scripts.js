document.querySelector(".navbar-toggler").addEventListener("click", function(e){
  document.querySelector("#mobileMenu").classList.toggle("show");
 });

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var slides2 = document.getElementsByClassName("mySlides2");
  var slides3 = document.getElementsByClassName("mySlides3");
  var slides4 = document.getElementsByClassName("mySlides4");
  var slides5 = document.getElementsByClassName("mySlides5");
  var slides6 = document.getElementsByClassName("mySlides6");
  var dots = document.getElementsByClassName("demo");
  var dots2 = document.getElementsByClassName("demo2");
  var dots3 = document.getElementsByClassName("demo3");
  var dots4 = document.getElementsByClassName("demo4");
  var dots5 = document.getElementsByClassName("demo5");
  var dots6 = document.getElementsByClassName("demo6");
  var captionText = document.getElementById("caption");
  var captionText2 = document.getElementById("caption2");
  var captionText3 = document.getElementById("caption3");
  var captionText4 = document.getElementById("caption4");
  var captionText5 = document.getElementById("caption5");
  var captionText6 = document.getElementById("caption6");
  if (n > slides.length) {slideIndex = 1}
  if (n > slides2.length) {slideIndex = 1}
  if (n > slides3.length) {slideIndex = 1}
  if (n > slides4.length) {slideIndex = 1}
  if (n > slides5.length) {slideIndex = 1}
  if (n > slides6.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  if (n < 1) {slideIndex = slides2.length}
  if (n < 1) {slideIndex = slides3.length}
  if (n < 1) {slideIndex = slides4.length}
  if (n < 1) {slideIndex = slides5.length}
  if (n < 1) {slideIndex = slides6.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < slides3.length; i++) {
    slides3[i].style.display = "none";
  }
  for (i = 0; i < slides4.length; i++) {
    slides4[i].style.display = "none";
  }
  for (i = 0; i < slides5.length; i++) {
    slides5[i].style.display = "none";
  }
  for (i = 0; i < slides6.length; i++) {
    slides6[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active", "");
  }
  for (i = 0; i < dots3.length; i++) {
    dots3[i].className = dots3[i].className.replace(" active", "");
  }
  for (i = 0; i < dots4.length; i++) {
    dots4[i].className = dots4[i].className.replace(" active", "");
  }
  for (i = 0; i < dots5.length; i++) {
    dots5[i].className = dots5[i].className.replace(" active", "");
  }
  for (i = 0; i < dots6.length; i++) {
    dots6[i].className = dots6[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  slides2[slideIndex-1].style.display = "block";
  slides3[slideIndex-1].style.display = "block";
  slides4[slideIndex-1].style.display = "block";
  slides5[slideIndex-1].style.display = "block";
  slides6[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  dots2[slideIndex-1].className += " active";
  dots3[slideIndex-1].className += " active";
  dots4[slideIndex-1].className += " active";
  dots5[slideIndex-1].className += " active";
  dots6[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
  captionText2.innerHTML = dots2[slideIndex-1].alt;
  captionText3.innerHTML = dots3[slideIndex-1].alt;
  captionText4.innerHTML = dots4[slideIndex-1].alt;
  captionText5.innerHTML = dots5[slideIndex-1].alt;
  captionText6.innerHTML = dots6[slideIndex-1].alt;
}





