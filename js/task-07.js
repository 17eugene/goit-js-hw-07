const fontControl = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

const changer = function () {
    text.style.fontSize = fontControl.value + 'px'
}

fontControl.addEventListener('input', changer)


