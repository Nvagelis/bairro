$(document).ready(function (){
    /*     ------ moving boxies ----   */
    var $window = $(window);
    var $par = $('.image-container');
    var $div = $('.image-content');
    var offset, scroll, top;
    var diff = $par.height()-$div.height();
  
    var render = function(){
        $div.each(function(){
            top = $window.scrollTop();
            offset = $(this).offset().top;
            scroll = -Math.round(((top - offset)/$div.height())*diff);
            $(this).css({'transform':'translate(0,'+ (scroll) +'px)'});
        });
    };

    $window.scroll(function(){
        render();
    });
});


