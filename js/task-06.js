const validInputEl = document.querySelector('input#validation-input');

validInputEl.addEventListener('blur', function () { 

    if (validInputEl.value.length == validInputEl.dataset.length) {
        validInputEl.classList.add("valid");
        validInputEl.classList.remove("invalid");
    }
    else {
        validInputEl.classList.add("invalid");
        validInputEl.classList.remove("valid");
    }

});