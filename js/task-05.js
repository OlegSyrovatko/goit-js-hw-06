const inputEl = document.querySelector('input#name-input');
const spanEl = document.querySelector('span#name-output');


inputEl.addEventListener('input', function () { 

    inputEl.value ? spanEl.textContent = inputEl.value : spanEl.textContent = "Anonymous"; 
});