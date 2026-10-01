function generarAleatorio(min, max) {
  let random = Math.random();
  let numero = random * (max - min)

  let numeroEntero = Math.ceil(numero)
  numeroEntero = numeroEntero + min

  return numeroEntero
}

function mostrarEnSpan(idSpan, textoSpan) {
  let componente = document.getElementById("idSpan");
  componente.textContent = textoSpan;
}

function graficarRectangulo(x, y, ancho, alto, color) {
  let xFloat = parseFloat(x);
  let yFloat = parseFloat(y);
  let anchoFloat = parseFloat(ancho);
  let altoFloat = parseFloat(alto);

  context.fillStyle = color
  context.fillRect(xFloat, yFloat, anchoFloat, altoFloat)
}

function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarTextoSpan(idSpan, texto) {
  const span = document.getElementById(idSpan);
  if (span) {
    span.textContent = texto;
  } else {
    console.error(`No se encontró un elemento con id "${idSpan}"`);
  }
}

function recuperarTexto(idComponente) {

  let componente = document.getElementById(idComponente);
  let valor = componente.value;

  return valor
}

function recuperarFloat(idComponente) {

  let valorTexto = recuperarTexto(idComponente);
  let valorFloat = parseFloat(valorTexto);

  return valorFloat;
}

function recuperarEntero(idComponente) {
  
  let valorTexto = recuperarTexto(idComponente);
  let valorFloat = parseInt(valorTexto);

  return valorFloat;
}