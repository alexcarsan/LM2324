function saludo(){
    var usuario = document.getElementById("usuario").value;
    var contra = document.getElementById("contra").value;
    if (usuario == "" || contra == "") {
        alert("Introduzca un usuario y una contraseña.");
    }
    else {
        alert("Bienvenido usuario "+usuario+" con la contraseña "+contra+".");
    }
}