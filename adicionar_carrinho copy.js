var carrinho = {
    itens: [],
    valorTotal: 0
};

// Função para adicionar ao carrinho
function adicionarAoCarrinho() {
    // Seletor para todos os elementos com a classe "item"
    var itens = document.querySelectorAll('.item');

    // Itera sobre cada item
    itens.forEach(function(item) {
        // Obtém a quantidade do input
        var quantidade = parseInt(item.querySelector('input[name="quantidade"]').value, 10);

        // Se a quantidade for válida
        if (!isNaN(quantidade) && quantidade > 0) {
            // Obtém o preço do produto
            var precoUnitario = parseFloat(item.querySelector('#valor-produto').innerText.replace('R$ ', ''));

            // Calcula o preço total do item
            var precoTotal = quantidade * precoUnitario;

            // Adiciona o item atual ao array "itens" do carrinho
            carrinho.itens.push({
                id: item.querySelector('input[name="idProduto"]').value,
                quantidade: quantidade,
                precoUnitario: precoUnitario,
                precoTotal: precoTotal
            });

            // Atualiza o valor total do carrinho
            carrinho.valorTotal += precoTotal;
        } else {
            // Se a quantidade não for válida, exibe um alerta (pode ser ajustado conforme necessário)

        }
    });
}