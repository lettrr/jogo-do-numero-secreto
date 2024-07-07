let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela (tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
  exibirTextoNaTela('h1', 'Jogo do número secreto');
  exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
mensagemInicial();
function verificarChute(){
  let chute = document.querySelector('input').value;
  
  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Você acertoou!!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela('h1', 'o número secreto é menor.');
      exibirTextoNaTela('p', 'Tente novamente!');
    } else {
      exibirTextoNaTela('h1', 'o número secreto é maior.');
      exibirTextoNaTela('p', 'Tente novamente');
    }
    tentativas++;
    limparCampo();
  }

 }

 //funções de retorno
 function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeElementosNaLista = listaNumerosSorteados.length;

  if (quantidadeElementosNaLista == numeroLimite) { 
    listaNumerosSorteados = [];
  }
  if (listaNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    console.log(listaNumerosSorteados);
    // push adiciona um elemento ao final da array
    listaNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
 }

 function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
 }

 function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
 }