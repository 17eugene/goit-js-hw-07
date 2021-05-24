const сategories = document.querySelectorAll('.item'); // получаем ссылку на "родительские" пункты списка
const categoriesAmount = сategories.length;
console.log(`В списке ${categoriesAmount} категории.`);

const titles = document.querySelectorAll('h2'); // получаем ссылку на заголовки "подсписков"

const printData = (titles) => {
    titles.forEach(title => { // на каждой итерации:
        console.log(`Категория: ${title.textContent}`); // выводим название каждого заголовка
        let elements = title.nextElementSibling.querySelectorAll('li'); //обращаемся и получаем ссылку на следущего соседа заголовка (li)
        console.log(`Количество элементов: ${elements.length}`); // через свойство length выводим количество елементов в "подсписках"
    });
};

printData(titles)






