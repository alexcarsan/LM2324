let arrayDatos = [];

function actualizarArray() {
  document.getElementById('arrayResultado').textContent = arrayDatos.join(', ');
}

function agregarElemento() {
  const elemento = document.getElementById('elemento').value;
  if (elemento.trim() !== '') {
    arrayDatos.push(elemento);
    actualizarArray();
  }
}

function eliminarElemento() {
  const elemento = document.getElementById('elemento').value;
  const index = arrayDatos.indexOf(elemento);
  if (index !== -1) {
    arrayDatos.splice(index, 1);
    actualizarArray();
  }
}

function ordenarCreciente() {
  arrayDatos.sort();
  actualizarArray();
}

function ordenarDecreciente() {
  arrayDatos.sort().reverse();
  actualizarArray();
}

function buscarElemento() {
  const elemento = document.getElementById('buscarElemento').value;
  const index = arrayDatos.indexOf(elemento);
  if (index !== -1) {
    document.getElementById('posicionElemento').textContent = index + 1;
  } else {
    document.getElementById('posicionElemento').textContent = 'No encontrado';
  }
}