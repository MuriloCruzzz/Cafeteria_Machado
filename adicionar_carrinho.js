var precoCarrinhoTotal = 0;
var quantidadeTotal = 0;

function adicionarAoCarrinho() {
    // Seletor para todos os elementos com a classe "item"
    var itens = document.querySelectorAll('.item');
    contador = 0;
    // Itera sobre cada item
    itens.forEach(function(item) {
        // Obtém a quantidade do input
        var quantidade = parseInt(item.querySelector('input[name="idProduto"]').value, 10);


        // Se a quantidade for válida
        if (!isNaN(quantidade) && quantidade > 0) {
            // Obtém o preço do produto
            var precoUnitario = parseFloat(item.querySelector('#valor-produto').innerText.replace('R$ ', ''));

            // Calcula o preço total do item
            var precoTotal = quantidade * precoUnitario;

            if (contador == 0) {

                quantidadeTotal += quantidade;

                precoCarrinhoTotal += precoTotal;

                contador = 1;
            }

            // Atualiza o preço total na página
            item.querySelector('.preco').innerText = 'R$ ' + precoTotal.toFixed(2);

        } else {
            // Se a quantidade não for válida, exibe um alerta (pode ser ajustado conforme necessário)

        }


        document.querySelector('.quantidade').innerText = 'Quantidade itens: ' + quantidadeTotal;

        document.querySelector('.carrinho-').innerText = 'Valor Total: R$ ' + precoCarrinhoTotal.toFixed(2);

    });

}