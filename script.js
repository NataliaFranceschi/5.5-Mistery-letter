const botaoGerarCarta = document.getElementById('criar-carta');
const input = document.getElementsByTagName('input')[0];
const p = document.getElementsByTagName('p')[0];

function gerarCarta() {
    if (input.value.trim() === '') {
     p.innerHTML = 'Por favor, digite o conteúdo da carta';
    } else {
    p.innerHTML = '';
    for (let palavra of input.value.split(' ')) {
      const carta = document.createElement('span');
      carta.innerHTML = palavra+' ';
      p.appendChild(carta);
    }
  }
}

botaoGerarCarta.addEventListener('click', gerarCarta);
