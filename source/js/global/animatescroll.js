$(document).ready(function (){
    
    //background image parallax
    var $win = $(window);
    var $img = $('.image img');
    
    $win.scroll(function (){
        var top = $(this).scrollTop();
        $img.css({'-webkit-transform':'translate(0,' + Math.min((top * 0.05)/2,20) + '%)',
                  'transform':'translate(0,' + Math.min((top * 0.05)/2,20) + '%)'});
    });
    
    
    //on scroll animation
    var $bck = $('.bck-grnd');
    var top;
    
    var $smallFig = $('.left-box').find('figure');
    var $bigFig = $('.right-box').find('figure');
    var $leftTitle = $('.left-box').find('.title-holder');
    var $rightTitle = $('.right-box').find('.title-holder');
    
    $bck.css('height','0');
    
    function animeBack(){
        $bck.each(function (){
            if($(this).hasClass('animated')) { return true; }
            top = $win.scrollTop();
            if(top > ($(this).offset().top) - $win.height()/2){
                $(this).animate({'height': '100%'}, 700);
                $(this).addClass('animated');
            }
        });
    }
    
    function animation($elem){
        $elem.each(function (){
            if($(this).hasClass('animated')) { return true; }
            top = $win.scrollTop();
            if(top > ($(this).offset().top) - $win.height()/2){
                $(this).animate({'opacity': '1'}, {'queue': false, 'duration': 500});
                $(this).animate({'top': '0'}, 1000);
                $(this).addClass('animated');
            }
        });
    }
    
    $win.on('scroll', function (){
        animeBack();
        animation($leftTitle);
        animation($rightTitle);
        animation($bigFig);
        animation($smallFig);
    });
    $win.trigger('scroll');
});


