let counterValue = 0;

const increment = () => counterValue++;
const decrement = () => counterValue--;

const counterNum = document.getElementById('value')
const incrBtn = document.querySelector('[data-action="increment"]');
const decrBtn = document.querySelector('[data-action="decrement"]');

incrBtn.addEventListener('click', () => {
    increment();
    counterNum.textContent = counterValue;
});

decrBtn.addEventListener('click', () => {
    decrement();
    counterNum.textContent = counterValue;
});



