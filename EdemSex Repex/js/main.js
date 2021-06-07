
function cortarTextoConPuntos(texto, limite)
{
  var puntosSuspensivos = "...";
  if(texto.length > limite)
  {
    texto = texto.substring(0,limite) + puntosSuspensivos;
  }

    return texto;
}



// Funcion que permite que el menu se adapte a la altura de la pantalla
function nabvarcambio_tamaño(){

    var ventana_h = $(window).height()-80;
    var ventana_w = $(window).width();

     $('#container-nav-').css({ 'height':ventana_h });
    if(ventana_w>542){
        $('.container-nav-').css( 'display','block' );
    }else{
        $('.container-nav-').css( 'display','none' );

    }

    if(ventana_w >769){
        $('.navbar-movil').hide(300);
        $( "#btn-menu" ).prop( "checked", false );

    }
 
}


function btn_click_add_remove_modal(button,modal){
    $(button).click(function(){
       
        $(modal).show(300);    
        $('.body').css( 'overflow','hidden' );
 
     })
}

function hidden_visibilit_click(){

   
    // Ocultar o mostrar los submenus
    $(".btn-submenu-").click(function(){
        $(this).children("ul").slideToggle();
    })
    $("ul").click(function(e){
        e.stopPropagation();
    })

    $(".lbl-menu").click(function(){
        if ($('.navbar-movil').is(':hidden')){

                $('.navbar-movil').show(300);
            }
            else{
                $('.navbar-movil').hide(300);

                }
    })
   
    // Modalclick   overflow:hidden;

    $(".btn-close-ventana-modal").click(function(){
        $('.ventana-modal').hide(300);
        $('.body').css( 'overflow','auto' );

    })

    btn_click_add_remove_modal(".btn-contacto","#modal-contacto");

   
    btn_click_add_remove_modal(".btn-send-nudes","#modal-send-nudes");

    $(".btn-send-nudes").click(function(){
        $('#modal-send-nudes').show(300);
        $('.body').css( 'overflow','hidden' );

    })
 }





 $(document).ready(function(){
    var texto= $('.titulo-card').text();
       
    $(".titulo-card").text( cortarTextoConPuntos(texto,48));
    //Adaptar la altura del menu a la altura de la pantalla
     $(window).on("resize", nabvarcambio_tamaño);
         nabvarcambio_tamaño();
        
         hidden_visibilit_click(); /*Function para mostrar u ocultar*/
 });

