function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const els = {
    inputEl: document.querySelector('input.number'),
    createButton: document.querySelector('[data-action="create"]'),
    destroyButton: document.querySelector('[data-action="destroy"]'),
};


els.createButton.addEventListener('click', function () { 

  console.log(els.inputEl.innerHTML);

});

console.log(InputEl);