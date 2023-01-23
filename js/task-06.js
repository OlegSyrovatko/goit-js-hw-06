const validInputEl = document.querySelector('input#validation-input');
// console.log(validInputEl.placeholder);  

validInputEl.addEventListener('blur', function () { 

    if (validInputEl.value.length == 6) {
        validInputEl.classList.add("valid");
        elem.classList.remove("invalid");
    }
    else {
        validInputEl.classList.add("invalid");
        elem.classList.remove("valid");
    }

});