const slider = document.querySelector("#slider");
const early = document.querySelector(".early");
const last = document.querySelector(".last");

early.innerHTML = slider.min;
last.innerHTML = slider.value;
slider.addEventListener("change", function () {
  last.innerHTML = slider.value;
});
//to make real-time value change use input not change. Go to 61
