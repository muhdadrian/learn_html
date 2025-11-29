const slider = document.querySelector("#slider");
const early = document.querySelector(".early");
const last = document.querySelector(".last");

early.innerHTML = slider.min;
last.innerHTML = slider.value;
slider.addEventListener("input", function () {
  last.innerHTML = slider.value;
});

//the input will not supported by old browser. If not supported, use change instead.
//to add js to color, go to 62
