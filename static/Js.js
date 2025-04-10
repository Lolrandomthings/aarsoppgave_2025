// Make a function that can make it so there is a dark mode and light mode

let changeColorEl = document.getElementById("changeColor")

changeColorEl.addEventListener("click", darkmode)

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }