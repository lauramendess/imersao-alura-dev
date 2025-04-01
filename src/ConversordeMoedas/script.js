/*
function conversor() {
    var umwon = 0.0040;
    var valorwons = parseFloat(prompt("Digite um valor em wons: "));

    if (!isNaN(valorwons)) {
        alert("O valor em dólares é: $" + (valorwons * umwon).toFixed(2));
    } else {
        alert("Por favor, insira um número válido.");
    }
}
*/
function conversor(){ 
    //Criação das variáveis e entrada de dados
    let valorWons = prompt("Digite o valor em Wons: ")
    let cotacaoReal = prompt("Digite o valor da cotação de wons em reais")
    
    //Conversão de Wons para Reais
    let resultado = valorWons * cotacaoReal
    
    //Exibição da primeira conversão
    alert(resultado)
    
    //Criação da segunda variável de cotação
    let cotacaoDolar = prompt("Digite o valor da cotação de wons em dólares")
    
    //Conversão de Wons para Dólares
    resultado = valorWons * cotacaoDolar
    
    //Exibição do resultado
    alert(resultado)
}