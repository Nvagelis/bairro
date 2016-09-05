$(document).ready(function (){
    var $win = $(window),
        $body = $('body');
    
    /*----------loader home page -------*/
    var $bar = $('.loader-bar');
    $bar.animate({'width':'200px'}, 2000, function (){
        $(this).animate({'left':'200px'}, 500, function (){
            $('.loader-home').fadeOut(500);
        });
    });
    
    /*----------loader in page -------*/
    $win.load(function (){
       $('.loader-site').animate({'top':'-100%'}, 600); 
    });
    
     /*----------loader out page -------*/
    var $links = $body.find('a').not('.arrow-box a');
    var $block1 = $('.block-1').css('top','200%');
    var $block2 = $('.block-2').css('top','200%');

    $links.on('click', function (e){
        function redic(){
            window.location = locLink;
        }   
        e.preventDefault();
        var locLink = this.href;
        $block2.stop().animate({'top':'100%'}, 600); 
        $block1.stop().delay(200).animate({'top':'100%'}, 500, function (){
            redic();
            setTimeout(function () {
                $block1.css('top','200%');
                $block2.css('top','200%');
            }, 2000);
        });

    });
});


