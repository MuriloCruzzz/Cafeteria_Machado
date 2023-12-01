function verificarHorarioFuncionamento() {
    var agora = new Date();
    var diaSemana = agora.getDay(); // 0 (domingo) a 6 (sábado)
    var horaAtual = agora.getHours();
    var minutoAtual = agora.getMinutes();

    var abertura = { dia: 1, hora: 8, minuto: 0 }; // Exemplo: Segunda-feira às 8:00
    var fechamento = { dia: 5, hora: 19, minuto: 30 }; // Exemplo: Sexta-feira às 18:30
    var domingosFeriados = [0, 6]; // Dias da semana: 0 (domingo), 6 (sábado)

    var statusCafeteria = document.getElementById('statusCafeteria');

    if (
        (diaSemana >= abertura.dia && diaSemana <= fechamento.dia && horaAtual >= abertura.hora && horaAtual < fechamento.hora) &&
        (!domingosFeriados.includes(diaSemana))
    ) {
        statusCafeteria.innerText = 'Aberto';
        statusCafeteria.className = 'aberto';
    } else {
        statusCafeteria.innerText = 'Fechado';
        statusCafeteria.className = 'fechado';
    }
}

// Chame a função para verificar o horário de funcionamento ao carregar a página
window.onload = function () {
    verificarHorarioFuncionamento();
    exibirComentarios();
};

//sessão de comentário
var comentarios = [
    { nome: 'João', comentario: 'Ótimo café! Recomendo.' },
    { nome: 'Maria', comentario: 'Ambiente aconchegante, adorei.' },
    // Adicione mais comentários conforme necessário
];

  function exibirComentarios() {
    var container = document.getElementById('comentarios');
    container.innerHTML = '';

    comentarios.forEach(function (comentario) {
      var div = document.createElement('div');
      div.innerHTML = '<strong>' + comentario.nome + ':</strong> ' + comentario.comentario;
      container.appendChild(div);
    });
    }

  function adicionarComentario() {
    var nome = document.getElementById('nome').value;
    var novoComentario = document.getElementById('novoComentario').value;

    if (nome && novoComentario) {
      comentarios.push({ nome: nome, comentario: novoComentario });
      exibirComentarios();
      limparFormulario();
    } else {
      alert('Por favor, preencha todos os campos do formulário.');
    }
  }

  function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('novoComentario').value = '';
  }

  // Chame a função para exibir comentários quando a página carregar
  

let slides = document.querySelectorAll('.slideshow');
let dots = document.querySelectorAll('.dot');
let slideIndex = 1;
let timeoutID;
const showSlides = (n) => {
    let i;
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].setAttribute('class', 'dot');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].setAttribute('class', 'dot ativo');
    clearTimeout(timeoutID);
    timeoutID = setTimeout(autoSlides, 4000);
};
const plusSlides = (n) => {
    showSlides(slideIndex += n);
};
const currentSlide = (n) => {
    showSlides(slideIndex = n);
};
function autoSlides() {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < slides.length; i++) {
        dots[i].setAttribute('class', 'dot');
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].setAttribute('class', 'dot ativo');
    timeoutID = setTimeout(autoSlides, 4000);
}
autoSlides();
