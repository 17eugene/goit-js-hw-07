const inputRef = document.getElementById("validation-input");

let totalLenght = inputRef.getAttribute("data-length");
let intTotallenght = parseInt(totalLenght);

inputRef.oninput = function() {
  if (inputRef.value.length === intTotallenght) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove("valid");
    inputRef.classList.remove("invalid");
  }
  if (inputRef.value.length !== intTotallenght && inputRef.value.length !== 0) {
    inputRef.classList.add("invalid");
  }
};
