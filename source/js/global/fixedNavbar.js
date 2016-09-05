$(document).ready(function (){
    var $window = $(window);
    var prev = 0;
    var $header = $('.header');
    var $headerSpan = $('.header-space');
    
    $window.on('scroll', function (){
        var scrolltop = $window.scrollTop();
        if(scrolltop > 300){ 
            $header.toggleClass('hidden', scrolltop > prev);
            $headerSpan.toggleClass('hidden', scrolltop > prev);
            prev = scrolltop;
        }else{
            $header.removeClass('hidden');
            $headerSpan.removeClass('hidden');
        }
    });
});


