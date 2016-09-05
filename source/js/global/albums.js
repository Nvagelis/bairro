$(document).ready(function (){
    var $window = $(window);
    var $list = $('.gl-list');
    var $listItems = $('.gl-list li');
    var $albumImg = $('.album-gal .gl-img');
    var $singleImg = $('.single-gal .gl-img');
    var $gallery = $('.gallery');
    var minheight = 0;
    
    $listItems.css({'transform':'matrix(1, 0, 0, 1, 0, 20)'});
    
    function AnimateNegHg($elem,angle) {
        $elem.each(function(index){
            $(this).delay(100*index).animate({vag: angle}, {
                step: function(now) {
                    $(this).css('transform','matrix(1, 0, 0, 1, 0, '+ (angle - now) +')'); 
                },
                duration:'slow'
            },'linear');
        });
    }
    
    function placeAlbImg(){
        $albumImg.each(function(i){
            $(this).css({'background-image':'url("images/albums/al-'+ (i+1) +'.jpg")', 'transform':'matrix(1, 0, 0, 1, 0, 0)'});
        });
    }
    function placeSingleImg(){
        $singleImg.each(function(i){
            $(this).css({'background-image':'url("images/coffee/coffee-'+ (i+1) +'.jpg")', 'transform':'matrix(1, 0, 0, 1, 0, 0)'});
        });
    }
    function fixHeight(){
        minheight = $window.height();
        $gallery.css('min-height' , minheight-115 + 'px');
    }
    function imageHover($elem){
        $elem.find('a').on('mouseenter', function(){
            $(this).siblings('div').css({'transform' : 'matrix(1.05, 0, 0, 1.05, 0, 0)'});
        });
        $elem.find('a').on('mouseleave', function(){
            $(this).siblings('div').css({'transform' : 'matrix(1, 0, 0, 1, 0, 0)'});
        });
    }
    fixHeight();
    placeAlbImg();
    placeSingleImg();
    setTimeout(function (){
        AnimateNegHg($listItems,20);
    },600);
    imageHover($list);
});


