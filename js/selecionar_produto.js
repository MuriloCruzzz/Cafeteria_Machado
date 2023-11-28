function adicionarAoCarrinho(botao) {
    // Obtém a quantidade do produto
    const quantidade = document.querySelector(`input[name="idProduto"]`).value;

    // Obtém o preço do produto
    const preco = document.querySelector(`p[data-preco]`).innerText;

    // Calcula o valor total do produto
    const valorTotal = quantidade * preco;

    // Adiciona o produto ao carrinho
    const carrinho = document.querySelector(`#carrinho`);
    const item = document.createElement("li");
    item.innerHTML = `
      <img src="imagens/cafe1.jpg" alt="Café Espresso">
      <h2>Café Espresso</h2>
      <p>R$ ${preco}</p>
      <p>Quantidade: ${quantidade}</p>
      <p>Valor total: R$ ${valorTotal}</p>
    `;
    carrinho.appendChild(item);

    // Altera o valor do campo de preço
    const precoElemento = document.querySelector(`span.preco`);
    precoElemento.innerText = valorTotal;
}