const inputRef = document.querySelector('#validation-input');

let totalLenght = inputRef.getAttribute('data-length');
let intTotalLenght = parseInt(totalLenght);

inputRef.addEventListener('blur', onInput)

function onInput() {
  if (inputRef.value.length === intTotalLenght) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
    return;
  }
  if (inputRef.value.length === 0) {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
    return;
  }
  if (inputRef.value.length !== intTotalLenght && inputRef.value.length !== 0) {
    inputRef.classList.add('invalid');
    inputRef.classList.remove('valid');
    return;
  }
};