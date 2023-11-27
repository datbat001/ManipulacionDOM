let h1 = document.querySelector('h1');
const input1 = document.querySelector('#inputText1');
const input2 = document.querySelector('#inputText2');
const btn = document.querySelector('#btn');
const pResultado = document.querySelector('#PResultado');
const form = document.querySelector('#formulario');

form.addEventListener('submit', sumarInput);

function sumarInput(event) {
    event.preventDefault();
    var resultado = input1.value + input2.value;
    pResultado.innerHTML = "Resultado: " + resultado;
    
}

