const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.currentTarget.value.length > 0) {
        nameRef.textContent = event.currentTarget.value;
    } else if (event.currentTarget.value === '') {
        nameRef.textContent = 'незнакомец'
    } 
};
