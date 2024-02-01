document.addEventListener("DOMContentLoaded", function() {
    mostrarResultado();
});

let numeros = [1, 3, 5, 7, -3, -20, 112, -17, 2.6];

function sumasPares(numeros) {
    let total = 0.0;
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 1) {
            total += numeros[i];
        }
    }
    return total;
}

function mostrarResultado() {
    let resultado = sumasPares(numeros);
    document.getElementById("resultado").innerHTML = resultado;
}
