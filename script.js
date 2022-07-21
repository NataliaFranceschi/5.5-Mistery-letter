const botaoGerarCarta = document.getElementById('criar-carta');
const input = document.getElementsByTagName('input')[0];
const p = document.getElementById('carta-gerada');
const span = document.getElementsByTagName('span');
const contador = document.getElementById('carta-contador');

function gerarCarta() {
  if (input.value.trim() === '') {
    p.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    p.innerHTML = '';
    for (const palavra of input.value.split(' ')) {
      const carta = document.createElement('span');
      carta.innerHTML = palavra;
      carta.addEventListener('click', mudarCss);
      carta.className = gerarCssAleatorio();
      p.appendChild(carta);
    }
  } contador.innerText = span.length;
}

botaoGerarCarta.addEventListener('click', gerarCarta);

const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

function aleatorio(css) {
    return Math.floor(Math.random() * css.length);
}

function gerarCssAleatorio() {
  const estiloAleatorio = estilo[aleatorio(estilo)];
  const tamanhoAleatorio = tamanho[aleatorio(tamanho)];
  const rotacaoAleatoria = rotacao[aleatorio(rotacao)];
  const inclinacaoaleatoria = inclinacao[aleatorio(inclinacao)];
  return `${estiloAleatorio} ${tamanhoAleatorio} ${rotacaoAleatoria} ${inclinacaoaleatoria}`;
}

function mudarCss(event) {
  event.target.className = gerarCssAleatorio();
}
