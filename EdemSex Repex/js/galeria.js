$('.card-imagen').click(function(e){
    var thisSrc = $(this).attr('src');

    $(".img-modal-galery").attr("src",thisSrc);
    $('#modal-galeria').show(300);

})