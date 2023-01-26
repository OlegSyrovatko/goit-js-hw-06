function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');

buttonEl.addEventListener('click', function () { 

  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.innerHTML = getRandomHexColor();

});