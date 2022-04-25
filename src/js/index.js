const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const id = personagem.attributes.id.value;
    const name = personagem.getAttribute('data-name');

    const imagemPlayer1 = document.getElementById("imagem-player-1");
    imagemPlayer1.src = `./src/imagens/${id}.png`;

    const nomePersonagem = document.querySelector('.personagem-grande.player-1')
    nomePersonagem.getElementsByTagName('h2')[0].innerHTML = name

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");
  });
});
