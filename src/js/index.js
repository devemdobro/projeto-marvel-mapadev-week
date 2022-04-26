const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("mouseenter", () => {
    const idSelecionado = personagem.attributes.id.value;

    if (idSelecionado === "ultron") return;

    const nomeSelecionado = personagem.getAttribute("data-name");

    const imagemJogador1 = document.getElementById("personagem-jogador-1");
    imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

    const personagemJogador1 = document.querySelector(".personagem-grande.personagem-jogador-1");
    personagemJogador1.getElementsByTagName("h2")[0].innerHTML = nomeSelecionado;

    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    personagem.classList.add("selecionado");
  });
});
