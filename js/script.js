// Раздел переменных
var modalWrite = document.querySelector(".modal-writeus");
var modal = document.querySelector(".modal");
var close = modal.querySelector(".modal-close");
var show = document.querySelector(".catalog-list");
var form = modal.querySelector("form");
var modalName = modal.querySelector("[name=name]");
var email = modal.querySelector("[name=email]");
var emailText = modal.querySelector("[name=email-text]");

var over = document.querySelector(".overlay");

var isStorageSupport = true;


try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

// Раздел открытия формы
modalWrite.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");

  if (storage) {
    modalName.value = localStorage.getItem("modalName");
    email.value = localStorage.getItem("email");
    emailText.focus();
  } else {
    modalName.focus();
  }
});


// Раздел закрытия формы
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  modal.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!modalName.value || !email.value || !emailText.value) {
    evt.preventDefault();
    modal.classList.remove("modal-error");
    modal.offsetWidth = popup.offsetWidth;
    modal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("modalName", modalName.value);
      localStorage.setItem("email", email.value);
    }
  }
});

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
  // over.style.display = "none";
  // modal.style.display = "none";
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
