let lista = [];

function introducir() {
    var calificacion = document.getElementById("numero").value;

    if (calificacion === "") {
        alert("Introduce una calificación");
    } else {
        lista.push(parseFloat(calificacion));
        mostrarListado();
        document.getElementById("numero").value = "";
    }
}

function tipoLista() {
    let nota = "<ul>";
    for (let i = 0; i < lista.length; i++) {
        nota += "<li>" + lista[i] + "</li>";
    }
    nota += "</ul>";
    document.getElementById("listado").innerHTML = nota;
}

function borrar() {
    lista.length = 0;
    tipoLista();
    resultado();
}

function media() {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }

    let media = 0;
    if (lista.length > 0) {
        media = suma / lista.length;
    }

    resultado(media);
}

function resultado(media) {
    document.getElementById("resultado").innerHTML = "La meedia es: " + media;
}