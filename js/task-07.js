const rangeEl = document.querySelector('input#font-size-control');
const spanEl = document.querySelector('span#text');

// var el = document.getElementById('foo');
// var style = window.getComputedStyle(el, null).getPropertyValue('font-size');
// var fontSize = parseFloat(style); 
// now you have a proper float for the font size (yes, it can be a float, not just an integer)
// el.style.fontSize = (fontSize + 1) + 'px';

rangeEl.addEventListener('input', function () { 
    spanEl.style.fontSize = rangeEl.value + 'px';
});