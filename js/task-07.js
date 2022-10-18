const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
console.log(inputRef.value)
inputRef.addEventListener("input", (event) =>{
    console.log(event.currentTarget.value)
    textRef.style.fontSize = event.currentTarget.value+"px"
})


