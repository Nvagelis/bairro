$(document).ready(function (){
    
    var $window = $(window);
    var minHeight = 400;
    var minWidth = 400;
    var $slider = $('.slider');
    var $sliderWrap = $('.slider-wrap');
    
    var prev = 0;
    var header = $('.header');
    var $headerSpan = $('.header-space');
    
    
    function fixDimensions(){
        minHeight = $window.height();
        minWidth = $window.width();
        $slider.css({'height': minHeight + 'px'});
        $sliderWrap.css({'width': minWidth + 'px', 'height': minHeight + 'px'});
    }

    fixDimensions();
    $(window).resize(fixDimensions);
    
    $window.on('scroll', function (){
        var scrolltop = $window.scrollTop();
        if(scrolltop > 300){                    
            header.toggleClass('hidden', scrolltop > prev);
            $headerSpan.toggleClass('hidden', scrolltop > prev);
            prev = scrolltop;
            if (scrolltop > minHeight){
                header.attr('data-color','dark');
                $headerSpan.attr('data-color','dark');
            }else{
                header.attr('data-color','trans');
                $headerSpan.attr('data-color','trans');
            }
        }
    });
});


