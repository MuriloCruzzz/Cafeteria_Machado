const preco = 5;

// Evento do botão adicionar
document.getElementById("adicionar").addEventListener("click", function() {
    // Obtém o valor do campo quantidade
    const quantidade = document.getElementById("quantidade").value;

    // Calcula o valor total do produto
    const valorTotal = preco * quantidade;

    // Adiciona o produto ao carrinho
    adicionarAoCarrinho(valorTotal);
});

// Função para adicionar o produto ao carrinho
function adicionarAoCarrinho(valorTotal) {
    // Obtém o carrinho
    const carrinho = getCarrinho();

    // Adiciona o produto ao carrinho
    carrinho.push({
        produto: "Café Espresso",
        quantidade: quantidade,
        valorTotal: valorTotal
    });

    // Salva o carrinho
    setCarrinho(carrinho);

    // Exibe o carrinho
    exibirCarrinho();
}

// Função para obter o carrinho
function getCarrinho() {
    // Verifica se o carrinho já existe
    if (!carrinho) {
        // Cria o carrinho
        carrinho = [];
    }

    // Retorna o carrinho
    return carrinho;
}

// Função para salvar o carrinho
function setCarrinho(carrinho) {
    // Armazena o carrinho no localStorage
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

// Função para exibir o carrinho
function exibirCarrinho() {
    // Obtém o carrinho
    const carrinho = getCarrinho();

    // Verifica se o carrinho está vazio
    if (carrinho.length === 0) {
        // Exibe uma mensagem
        alert("Carrinho está vazio");
        return;
    }

    // Exibe o carrinho
    console.log(carrinho);
}