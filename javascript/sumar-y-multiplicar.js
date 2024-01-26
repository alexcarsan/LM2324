let numeros = [];

function agregarNumero() {
    const numero = parseFloat(document.getElementById('numero').value);
    if (!isNaN(numero)) {
      numeros.push(numero);
    }
}

function suma() {
    switch (operacion) {
      case 'Sumar':
        mostrarResultado(numeros.reduce((a, b) => a + b, 0));
        break;
      case 'Multiplicar':
        mostrarResultado(numeros.reduce((a, b) => a * b, 1));
        break;
      default:
        break;
    }
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').textContent = resultado;
  }
