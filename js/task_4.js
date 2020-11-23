let value = 0
function decrement() { 
    value -= 1;
    render()
}
function increment() {
    value += 1;
    render()
}
function render() { 
    ValueRef.textContent = value;
}

const buttonDecrementRef = document.querySelector('button[data-action="decrement"]')
const buttonIncrementRef = document.querySelector('button[data-action="increment"]')
const ValueRef = document.querySelector('#value')

buttonDecrementRef.addEventListener('click', decrement)


buttonIncrementRef.addEventListener('click', increment)
