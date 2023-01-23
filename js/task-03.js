const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const elImgMarkup = ({ url, alt }) => {

  const elImg = document.createElement("img");
  elImg.src = url;
  elImg.alt = alt;
  elImg.classList.add("item-img");
  // console.log(elImg);
  const elLi = document.createElement("li");
  elLi.append(elImg);
  // console.log(elLi);
  // elLi.insertAdjacentHTML("afterbegin", elLi);

  return elLi;
}

const elGalleryMarkup = images.map(elImgMarkup);
console.log(elGalleryMarkup);
document.querySelector('ul.gallery').append(...elGalleryMarkup);
console.log(document.querySelector("ul.gallery"));