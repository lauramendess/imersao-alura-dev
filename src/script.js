function conversor() {
    var umwon = 0.0040;
    var valorwons = parseFloat(prompt("Digite um valor em wons: "));

    if (!isNaN(valorwons)) {
        alert("O valor em dólares é: $" + (valorwons * umwon).toFixed(2));
    } else {
        alert("Por favor, insira um número válido.");
    }
}
