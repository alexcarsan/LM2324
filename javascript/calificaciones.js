let calificaciones = [];

function agregarCalificacion() {
    const calificacionInput = document.getElementById('calificacion');
    const calificacion = parseFloat(calificacionInput.value);

    if (isNaN(calificacion) || calificacion < 0 || calificacion > 10) {
        mostrarMensajeError('La calificación debe ser un número entre 0 y 10.');
        return;
    }

    calificaciones.push(calificacion);
    mostrarMensajeExito(`Calificación ${calificacion} agregada.`);
    calificacionInput.value = '';
}

function borrarCalificaciones() {
    calificaciones = [];
    mostrarMensajeExito('Calificaciones borradas.');
}

function calcularMedia() {
    if (calificaciones.length === 0) {
        mostrarMensajeError('No hay calificaciones para calcular.');
        return;
    }

    const sumaCalificaciones = calificaciones.reduce((a, b) => a + b, 0);
    const media = sumaCalificaciones / calificaciones.length;
    mostrarMensajeExito(`La media de las calificaciones es: ${media.toFixed(2)}`);
}

function mostrarMensajeError(mensaje) {
    mostrarMensaje(mensaje, 'red');
}

function mostrarMensajeExito(mensaje) {
    mostrarMensaje(mensaje, 'green');
}

function mostrarMensaje(mensaje, color) {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.color = color;
}