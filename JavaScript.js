//CARROSSEL SETAS

$(document).ready(function() {
    // Adiciona a classe active ao clicar nas setas
    $('.carousel-control-prev').click(function() {
        $('.carousel-control-prev-icon').addClass('active'); // Seta anterior
        $('.carousel-control-next-icon').removeClass('active'); // Remove da seta seguinte
    });

    $('.carousel-control-next').click(function() {
        $('.carousel-control-next-icon').addClass('active'); // Seta seguinte
        $('.carousel-control-prev-icon').removeClass('active'); // Remove da seta anterior
    });
});


