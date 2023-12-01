$(document).ready(function () {
    // Máscara para o campo de telefone
    $('#telForm').inputmask('(99) 99999-9999', { greedy: false });

    $('#email').inputmask({ alias: 'email' });
    // Obtém uma referência para o grupo de checkboxes
    var checkboxes = $('input[type="checkbox"]');

    // Obtém uma referência para o formulário
    var form = $('#meuFormulario');

    // Adiciona um evento de envio ao formulário
    form.on('submit', function (event) {
        // Variável para verificar se pelo menos um checkbox foi marcado
        var peloMenosUmMarcado = false;

        // Percorre todos os checkboxes
        checkboxes.each(function () {
            if ($(this).prop('checked')) {
                peloMenosUmMarcado = true;
                return false; // Se um checkbox foi marcado, sai do loop
            }
        });

        if (!peloMenosUmMarcado) {
            alert('Selecione pelo menos um tópico de interesse.');
            event.preventDefault();
            return; // Impede o envio do formulário
        }
        event.preventDefault();

        // Obtém o valor inserido no campo de nome
        var nome = document.getElementById('nomeForm').value;

        // Exibe a mensagem de agradecimento com o nome
        alert('Obrigado, ' + nome + '! Logo entraremos em contato.');
        location.reload();
        // Redefine os valores dos campos do formulário
        
    });
});