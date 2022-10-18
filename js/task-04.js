const counter = {
    value: 0,
    increment(){
        this.value +=1;
    },
    decrement(){
        this.value -= 1;
    }
}

const btnAdd = document.querySelector('#counter button[data-action="increment"]')
const btnMinus = document.querySelector('#counter button[data-action="decrement"]')
const valueEl = document.querySelector('#value')

btnAdd.addEventListener('click', function(){
    counter.increment()
    console.log(counter)
    valueEl.textContent = counter.value
});

btnMinus.addEventListener('click', function(){
    counter.decrement()
    console.log(counter)
    valueEl.textContent = counter.value
})
console.log(counter)