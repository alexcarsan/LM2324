function convertir(divisa){
    let valor = document.getElementById("cantidad").value;
    let resultado = 0;
    if (divisa=="celsius") {
        resultado =(valor - 32) * 5/9;
        document.getElementById("resultado").innerHTML = resultado + "ºC";
    }
    else {
        resultado = (valor * 9/5) + 32 ;
        document.getElementById("resultado").innerHTML = resultado + "ºF";
    }
}