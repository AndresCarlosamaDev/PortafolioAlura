const inputs = document.querySelectorAll('input');
const txtArea = document.getElementById('mensagem');

inputs.forEach((input) => {
    input.addEventListener('blur', (input) => {
        validar(input.target);
    });
});

txtArea.addEventListener('blur', (input) => {
    validarTextBox(input.target);
});


function validar(input) {
    if (input.validity.valid) {
        input.classList.remove('formcontato__input--error');
    } else {
        input.classList.add('formcontato__input--error');
    }
    
}

function validarTextBox(input) {
    if (input.validity.valid) {
        input.classList.remove('formcontato__textarea--error');
    } else {
        input.classList.add('formcontato__textarea--error');
        
    }
}