function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const els = {
    inputEl: document.querySelector('input'),
    createButton: document.querySelector('[data-create]'),
    destroyButton: document.querySelector('[data-destroy]'),
    boxes: document.querySelector('#boxes'),
};

divSizes = 30;
els.createButton.addEventListener('click', function () { 
  els.boxes.innerHTML = "";
  
  for (i = 1; i <= els.inputEl.value; i += 1) {

    elDiv = document.createElement("div");
    divColor = getRandomHexColor();
    elDiv.setAttribute("style", `width: ${divSizes}px; height: ${divSizes}px; background-color: ${divColor}`);
    divSizes += 10;
    els.boxes.append(elDiv);
   
  }

  divSizes = 30;
});

els.destroyButton.addEventListener('click', function () { 
  els.boxes.innerHTML = "";
  divSizes = 30;
});


