// Раздел переменных
var show = document.querySelector(".catalog-list");
var over = document.querySelector(".overlay");

// Задержка показа выпадающего меню раздела "каталог"
function myFunction() {
  show.classList.toggle("show");
}

// Функциии включения оверлея
function on() {
  over.style.display = "block";
}

function off() {
  over.style.display = "none";
}
