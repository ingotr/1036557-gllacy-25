// Раздел переменных
var show = document.querySelector(".catalog-list");
var modal = document.querySelector(".modal");
var over = document.querySelector(".overlay");

// Задержка показа выпадающего меню раздела "каталог"
function myFunction() {
  show.classList.toggle("show");
}

// Функциии включения оверлея
function on() {
  over.style.display = "block";
  modal.style.display = "block";
}

function off() {
  over.style.display = "none";
  modal.style.display = "none";
}

function modalClose() {
  modal.style.display = "none";
  over.style.display = "none";
}

// Закрыть оверлей и модального окна по нажатие ESC
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modal.style.display = "none";
    over.style.display = "none";
  }
});
