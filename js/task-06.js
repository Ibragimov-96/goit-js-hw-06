const input = document.querySelector('#validation-input')
// console.log(input.dataset.length)
input.addEventListener("blur", (e)=>{
    console.log(e.target.value.length);
    const length = Number(e.target.dataset.length);
    console.log(typeof length)
    if(e.target.value.length === length){
        e.target.classList.add('valid');
        e.target.classList.remove('invalid');
    }
    if(e.target.value.length !== length){
        e.target.classList.add('invalid') ;
        e.target.classList.remove('valid');
    }
});  