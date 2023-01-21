const elItem = document.querySelectorAll('.item');
console.log("Number of categories: " + elItem.length);

elItem.forEach(item => {
    console.log("Category: " + item.firstElementChild.innerHTML);
    console.log("Elements: " + item.lastElementChild.children.length);
});

