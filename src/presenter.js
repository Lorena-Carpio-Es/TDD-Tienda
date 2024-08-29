import mostrar from './mostrar.js';

document.getElementById('dato-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const dato = document.getElementById('dato-input').value;
  const resultado = mostrar(dato);
  document.getElementById('resultado-div').textContent = `El dato ingresado es: ${resultado}`;
});
