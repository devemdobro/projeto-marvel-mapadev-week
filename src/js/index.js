const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {

    const idSelecionado = personagem.attributes.id.value;

    if(idSelecionado === 'ultron') return;      

    
    const nomeSelecionado = personagem.getAttribute('data-name');

    const imagemJogador1 = document.getElementById("imagem-player-1");
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const nomeJogador1Personagem = document.querySelector('.personagem-grande.player-1')
    nomeJogador1Personagem.getElementsByTagName('h2')[0].innerHTML = nomeSelecionado

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");
  });
});
