let changeColorEl = document.getElementById("changeColor")

changeColorEl.addEventListener("click", darkmode)

function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }