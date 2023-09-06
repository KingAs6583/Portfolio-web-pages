const element = document.querySelector(".myElement");

window.addEventListener("resize", function() {
  const maxWidth = 720;
  if (window.innerWidth <= maxWidth) {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
});