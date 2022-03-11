
$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });

    $('#formContacto').on('show.bs.modal', function(e){
        console.log("El modal de contacto se esta mostrando");
    });

    $('#formContacto').on('shown.bs.modal', function(e){
        console.log("El modal de contacto se mostro");
    });

    $('#formContacto').on('hide.bs.modal', function(e){
        console.log("El modal de contacto se oculta");
    });

    $('#formContacto').on('hidden.bs.modal', function(e){
        console.log("El modal de contacto se oculto");
    });
});