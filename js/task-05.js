const spanText = document.querySelector('#name-output')

const inputRef = document.querySelector('#name-input')
inputRef.addEventListener('input', onInputChange)

function onInputChange(e) {
    console.log(e.currentTarget.value) 
    spanText.textContent = e.currentTarget.value? e.currentTarget.value : 'Anonymous';
    
}

