var notas = [];

function introducir() {
    let numero = parseFloat(document.getElementById("numero").value);
    document.getElementById("aviso").innerHTML = "";
    if (isNaN(numero)){
        document.getElementById("aviso").innerHTML = "Debes introducir un calificación entre 0 y 10.";
    }
    else{
        if (numero<0 || numero>10) {
            document.getElementById("aviso").innerHTML = "Debes introducir un calificación entre 0 y 10.";
        }
        else {
            notas.push(numero);
            document.getElementById("notas").innerHTML = notas;
        }
    }
}


function borrar() {
    lista.length = 0;
    tipoLista();
    resultado();
}

function media() {
    let total = 0.0;
    for (var i=0;i<notas.length;i++){
        total = total+notas[i];
    }
    total = total/notas.length;
    document.getElementById("resultado").innerHTML = total; 
}
