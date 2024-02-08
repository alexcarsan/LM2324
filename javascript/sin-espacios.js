function limpia(){
    let cadena = document.getElementById("cadena").value;
    let cadenaSinEspacios = cadena.replace(/ /g, "");
    let cadenaLimpia = cadenaSinEspacios.toUpperCase();
    document.getElementById("resultado") = cadenaLimpia;
}