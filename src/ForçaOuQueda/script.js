function iniciarJogo() {
    let timeJogador = ["", "", ""];
    let timeComputador = ["", "", ""];
    let forcaJogador = 0;
    let forcaComputador = 0;
  
    // Pega os heróis digitados
    timeJogador[0] = document.getElementById("heroi1").value.trim();
    timeJogador[1] = document.getElementById("heroi2").value.trim();
    timeJogador[2] = document.getElementById("heroi3").value.trim();
  
    // Verifica se os três campos foram preenchidos
    if (!timeJogador[0] || !timeJogador[1] || !timeJogador[2]) {
      alert("Por favor, preencha o nome dos 3 heróis.");
      return;
    }
  
    // Calcula a força do jogador
    for (let i = 0; i < 3; i++) {
      forcaJogador += Math.floor(Math.random() * 10) + 1;
    }
  
    // Computador escolhe os vilões
    const viloes = [
      "Thanos", "Loki", "Ultron", "Hela", "Ronan, o Acusador",
      "Caveira Vermelha", "Killmonger", "Agatha Harkness", "Doutor Destino", "Dormammu"
    ];
  
    for (let i = 0; i < 3; i++) {
      let indiceAleatorio = Math.floor(Math.random() * viloes.length);
      timeComputador[i] = viloes[indiceAleatorio];
      forcaComputador += Math.floor(Math.random() * 10) + 1;
    }
  
    // Mostrar times e forças
    document.getElementById("informacoesJogador").innerHTML =
      `<b>Seu time:</b> ${timeJogador.join(", ")}<br><b>Força:</b> ${forcaJogador}`;
  
    document.getElementById("informacoesComputador").innerHTML =
      `<b>Time do Computador:</b> ${timeComputador.join(", ")}<br><b>Força:</b> ${forcaComputador}`;
  
    // Mostrar botão de resultado
    const resultadoBtn = document.getElementById("resultadoBtn");
    resultadoBtn.style.display = "inline-block";
  
    resultadoBtn.onclick = function () {
      let resultadoTexto = "";
  
      if (forcaJogador > forcaComputador) {
        resultadoTexto = "<p class='ganhou'>🏆 Você ganhou!</p>";
      } else if (forcaJogador < forcaComputador) {
        resultadoTexto = "<p class='perdeu'>🤖 O computador venceu!</p>";
      } else {
        resultadoTexto = "<p class='empate'>🔄 Empate!</p>";
      }
  
      document.getElementById("resultadoFinal").innerHTML = resultadoTexto;
    };
  }
  