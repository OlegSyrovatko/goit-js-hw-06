
const refs = {
    deButton: document.querySelector('[data-action="decrement"]'),
    inButton: document.querySelector('[data-action="increment"]'),
    valueEl: document.querySelector('span#value'),
};

const counter = {
    value: 0,
    increment() {
        this.value += 1;
    },
    decrement() {
        this.value -= 1;
    },
 }

refs.deButton.addEventListener('click', function () { 
    counter.decrement();
    refs.valueEl.textContent = counter.value;
});

refs.inButton.addEventListener('click', function () { 
    counter.increment();
    refs.valueEl.textContent = counter.value; 
});
