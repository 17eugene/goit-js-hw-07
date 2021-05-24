const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// const makeGalleryEl = images.map(option => {
//     const image = document.createElement('img');
//     const listElement = document.createElement('li');
//     image.classList.add('list__image');
//     image.src = option.url;
//     image.alt = option.alt;
//     listElement.appendChild(image)
    
//     return image;
// });

// const listRef = document.querySelector('#gallery');
// listRef.append(...galleryEl)


const listRef = document.querySelector('#gallery');

const makeGalleryEl = (option) => {
    return `<li><img src = ${option.url} alt = ${option.alt}></li>`
};

const addGalleryEl = images.map(makeGalleryEl).join('');

listRef.insertAdjacentHTML('afterbegin', addGalleryEl);
















