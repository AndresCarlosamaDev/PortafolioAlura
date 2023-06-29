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
        input.parentElement.classList.remove('input-container--invalid');
    } else {
        input.parentElement.classList.add('input-container--invalid');
    }
    
}

function validarTextBox(input) {
    if (input.validity.valid) {
        input.parentElement.classList.remove('input-container--invalid');
    } else {
        input.parentElement.classList.add('input-container--invalid');
        
    }
}