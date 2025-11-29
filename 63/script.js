const color = document.querySelector("#color");
const hexa = document.querySelector(".hexa");

hexa.innerHTML = color.value;
color.addEventListener("input", function () {
  hexa.innerHTML = color.value; //black is the default color
  hexa.style.color = color.value; //the displayed hexa code also changed its color when the slider is moved
});
