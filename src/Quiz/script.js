// PARTE 1: Lista de perguntas e respostas
const perguntas = [
  {
    pergunta: "Quais são os três personagens principais do GTA V?",
    respostas: [
      { opcao: "Michael, Franklin e Trevor", correto: true },
      { opcao: "Niko, CJ e Tommy", correto: false },
      { opcao: "Luis, Claude e Carl", correto: false },
      { opcao: "Tony, Roman e Ryder", correto: false }
    ]
  },
  {
    pergunta: "Qual cidade fictícia é o cenário principal de GTA V?",
    respostas: [
      { opcao: "Vice City", correto: false },
      { opcao: "Liberty City", correto: false },
      { opcao: "Los Santos", correto: true },
      { opcao: "San Fierro", correto: false }
    ]
  },
  {
    pergunta: "Qual dos personagens é um ex-ladrão de bancos em GTA V?",
    respostas: [
      { opcao: "Franklin", correto: false },
      { opcao: "Lester", correto: false },
      { opcao: "Michael", correto: true },
      { opcao: "Lamar", correto: false }
    ]
  },
  {
    pergunta: "Qual empresa falsa de tecnologia aparece em GTA V como paródia da vida real?",
    respostas: [
      { opcao: "Fruit", correto: true },
      { opcao: "Pear", correto: false },
      { opcao: "BananaTech", correto: false },
      { opcao: "Gadgetron", correto: false }
    ]
  },
  {
    pergunta: "Qual veículo é usado para realizar o grande assalto ao banco no modo história?",
    respostas: [
      { opcao: "Helicóptero", correto: false },
      { opcao: "Carro-forte", correto: true },
      { opcao: "Moto", correto: false },
      { opcao: "Ônibus escolar", correto: false }
    ]
  }
];

  // PARTE 2: Pegando os elementos do HTML
  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");
  
  // PARTE 3: Variáveis para controle do jogo
  let indiceAtual = 0; // Índice da pergunta atual
  let acertos = 0; // Contador de acertos
  
  // PARTE 4: Função para carregar uma nova pergunta
  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`; // Atualiza o progresso
    const perguntaAtual = perguntas[indiceAtual]; // Pega a pergunta atual
    perguntaElemento.innerHTML = perguntaAtual.pergunta; // Exibe a pergunta
  
    respostasElemento.innerHTML = ""; // Limpa as respostas anteriores
  
    // Percorre todas as respostas da pergunta atual
    for (let i = 0; i < perguntaAtual.respostas.length; i++) {
      // Pega a resposta atual com base no índice 'i'
      const resposta = perguntaAtual.respostas[i];
      // Cria um novo elemento 'button' (botão)
      const botao = document.createElement("button");
      // Adiciona a classe CSS 'botao-resposta' ao botão para estilizar
      botao.classList.add("botao-resposta");
      // Define o texto do botão com a opção de resposta (resposta.opcao)
      botao.innerText = resposta.opcao;
      // Adiciona um evento de clique no botão
      botao.onclick = function () {
        // Se a resposta for correta (resposta.correto === true), incrementa o número de acertos
        if (resposta.correto) {
          acertos++; // Incrementa o contador de acertos
        }
  
        // Avança para a próxima pergunta
        indiceAtual++;
  
        // Se ainda houver perguntas, carrega a próxima pergunta
        if (indiceAtual < perguntas.length) {
          carregarPergunta(); // Carrega a próxima pergunta
        } else {
          // Se não houver mais perguntas, finaliza o jogo
          finalizarJogo();
        }
      };
  
      // Adiciona o botão de resposta à tela, dentro do elemento 'respostasElemento'
      respostasElemento.appendChild(botao);
    }
  }
  
  // PARTE 5: Função para mostrar a tela final
  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length}`; // Exibe o resultado
    conteudo.style.display = "none"; // Esconde as perguntas
    conteudoFinal.style.display = "flex"; // Mostra a tela final
  }
  
  // PARTE 6: Iniciando o jogo pela primeira vez
  carregarPergunta();
  