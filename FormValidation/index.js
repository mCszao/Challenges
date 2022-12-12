const sendForm = document.querySelector("footer button");
const options = document.querySelectorAll('input[type="checkbox"]');
const body = document.querySelector("body");
const groupLabel = document.querySelectorAll("label");
const quantitySticker = document.querySelector(".sticker-quantity");
const minusButton = document.querySelector(".minus");
const plusButton = document.querySelector(".plus");
const footer = document.querySelector("footer");
let newSpan = document.querySelector("footer span");

plusButton.addEventListener("click", add);
window.addEventListener("load", quantityValidation);
sendForm.addEventListener("click", postForm);
window.addEventListener("load", optionRequired);
sendForm.addEventListener("click", (e) => {
  e.preventDefault();
});

function postForm() {
  optionRequired();
  if (allInputs() && quantityValidation()) {
    newSpan.innerText = "Formulário enviado com sucesso";
  } else {
    newSpan.innerText = "";
    console.log("não deu certo");
  }
  if (quantitySticker.value == 0) {
    quantitySticker.style.backgroundColor = "#f59393";
    quantitySticker.style.border = "1px solid #f33232";
  }
}

function allInputs() {
  valid = 0;
  options.forEach((input) => {
    if (input.getAttribute("checked") === "true") {
      return valid++;
    } else {
      return;
    }
  });
  if (valid === 0) {
    groupLabel.forEach((label) => (label.style.color = "#F59393"));
    options.forEach((input) => (input.style.filter = ""));
    return false;
  }
  return true;
}

let valid = 0;

function optionRequired() {
  options.forEach((input) => {
    input.onchange = function () {
      if (
        input.getAttribute("checked") == "" ||
        input.getAttribute("checked") == null
      ) {
        input.setAttribute("checked", true);
        groupLabel.forEach((label) => (label.style.color = "#071723"));
      } else {
        input.removeAttribute("checked");
      }
    };
  });
}

function quantityValidation() {
  let quantityValue = parseInt(quantitySticker.value);
  if (quantityValue <= 0) {
    quantitySticker.value = 0;
    minusButton.style.fill = "#c5cfd6";
    minusButton.style.backgroundColor = '"#c5cfd6"';
    minusButton.style.cursor = "auto";
    minusButton.removeEventListener("click", sub);
    return false;
  }
  return true;
}

function add() {
  quantityValidation();
  let quantityValue = parseInt(quantitySticker.value);
  let sum = quantityValue + 1;

  if (sum !== 0) {
    minusButton.style.fill = "#2f3676";
    minusButton.style.backgroundColor = '"#2f3676"';
    minusButton.style.cursor = "pointer";
    quantitySticker.style.backgroundColor = "#dde3e9";
    quantitySticker.style.border = "1px solid #2f3676";
    minusButton.addEventListener("click", sub);
  }
  quantitySticker.value = sum;
}

function sub() {
  let quantityValue = parseInt(quantitySticker.value);
  let subt = quantityValue - 1;
  quantitySticker.value = subt;
  if (subt == 0) {
    quantityValidation();
  }
}
