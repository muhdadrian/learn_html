const title = document.querySelector("h1");

let name = localStorage.getItem("name");
if (!name) {
  name = prompt("Enter your name: ");
  localStorage.setItem("name", name);
}

title.innerHTML = `Hello, ${name}!`;

//To replace name
const replaceName = (e) => {
  name = prompt("Enter your new name: ");
  localStorage.setItem("name", name);
  e.preventDefault();
};

//To delete name
const deleteName = (e) => {
  localStorage.removeItem("name"); //What to delete? 'name' (key)
  e.preventDefault();
};

//To delete storage
const deleteStorage = (e) => {
  localStorage.clear();
  e.preventDefault();
};

//Toggle Dark Mode
const toggle = document.querySelector(".toggle");
let theme = localStorage.getItem("theme");

if (!theme) {
  localStorage.setItem("theme", "light");
}

//1st
const darkMode = () => {
  document.body.classList.add("dark-mode");
  toggle.innerHTML = "Light Mode"; //this will change the Dark Mode words in HTML
  localStorage.setItem("theme", "dark");
};

//to change to light mode back when we click the toggle button (3rd)
const lightMode = () => {
  document.body.classList.remove("dark-mode");
  toggle.innerHTML = "Dark Mode";
  localStorage.setItem("theme", "light");
};

//to check if the theme dark, then execute it (2nd)
if (theme === "dark") {
  darkMode();
}
//because the toggle button is link we put event (e) prevent default and paramater e, so that the link will not be executed
toggle.addEventListener("click", function (e) {
  theme = localStorage.getItem("theme");
  if (theme === "light") {
    darkMode();
  } else {
    lightMode();
  }
  e.preventDefault();
});
