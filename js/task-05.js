const inputRef = document.querySelector('#name-input');
const nameRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange)

function onInputChange(event) {
    if (event.target.value.trim() === '') {
        nameRef.textContent = 'незнакомец';
    } else {
        nameRef.textContent = event.currentTarget.value;
    } 
};



// if (event.target.value.length > 0 && event.target.value.trim() !== '') {
//         nameRef.textContent = event.target.value;
//     } else if (event.target.value === '') {
//         nameRef.textContent = 'незнакомец'
//     } 