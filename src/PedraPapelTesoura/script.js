function jogar(){
    //VERIFICAÇÃO DA IDADE, PODEMOS COMEÇAR POR AQUI
    var idade = prompt("Informe sua idade:");
    if (idade < 18) {
      alert("Menores de idade não podem se arriscar no Round6!");
    }
    if (idade >= 18){
      alert("Como você é maior de idade, vamos jogar PEDRA, PAPEL ou TESOURA!")
      alert("Você escolherá a sua jogada e o computador vai sortear a dele!")

      let escolhaJogador = prompt("Informe a sua jogada: 1-PEDRA, 2-PAPEL, 3-TESOURA")
  
      let escolhaComputador = Math.floor(Math.random() * 2) + 1;
  
      if (escolhaJogador == escolhaComputador){
        alert("Tivemos um empate!")
      }

      if (escolhaJogador == 1){
        if (escolhaComputador == 3) {
          alert("A tesoura do computador foi esmagada! Você venceu!")
        }
        if (escolhaComputador == 2){
          alert("O papel do computador embrulhou a sua pedra. Você perdeu!")
        }
      }
  
      if (escolhaJogador == 2){
          if (escolhaComputador == 1) {
            alert("A pedra do computador foi embrulhada! Você venceu!")
          }
          if (escolhaComputador == 3){
            alert("A tesoura do computador rasgou o seu papel. Você perdeu!")
          }
  
       }
  
       if (escolhaJogador == 3){
          if (escolhaComputador == 1){
            alert("A pedra do computador esmagou a sua tesoura. Você perdeu.")
          }
  
          if (escolhaComputador == 2){
            alert("A sua tesoura cortou o papel do computador. Você venceu!")
  
          }
        }
  
    }
  }