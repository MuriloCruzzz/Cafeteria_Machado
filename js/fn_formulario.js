// Obtém uma referência para o grupo de checkboxes
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Obtém uma referência para o formulário
var form = document.querySelector('form');

// Adiciona um evento de envio ao formulário
form.addEventListener('submit', function(event) {
    // Variável para verificar se pelo menos um checkbox foi marcado
    var peloMenosUmMarcado = false;

    // Percorre todos os checkboxes
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            peloMenosUmMarcado = true;
            break; // Se um checkbox foi marcado, sai do loop
        }
    }
    if (!peloMenosUmMarcado) {
        alert('Selecione pelo menos um tópico de interesse.');
        event.preventDefault();
        return; // Impede o envio do formulário
    }
});