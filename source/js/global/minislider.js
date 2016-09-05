$(document).ready(function (){
    
    var $win = $(window);
    var $viwpoint = $('.viwpoint');
    var $images = $('.min-slider').find('img');
    var $left = $('.controls .left');
    var $right = $('.controls .right');
    var mar = 0;
    var slWidth=0;
    
    $win.load(function (){
        $images.each(function (){
            slWidth = slWidth + $(this).width();
        });
        $viwpoint.css({'width':slWidth + 150 + 'px'});
    });
    
    $right.on('click', function (e){
        e.preventDefault();
        if(($win.width() + mar) < $viwpoint.width() && !$viwpoint.is(':animated')){
            $viwpoint.animate({'margin-left':'-=400px'}, 500, function (){
                mar  +=400;
            }); 
        }
    });
    
    $left.on('click', function (e){
        e.preventDefault();
        if(($win.width() + mar) > $win.width() && !$viwpoint.is(':animated')){
            $viwpoint.animate({'margin-left':'+=400px'}, 500, function (){
                mar  -=400;
            });
        }
    });
});


