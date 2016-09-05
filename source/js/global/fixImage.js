$(document).ready(function (){
    var $window = $(window);
    var $header = $('.header');
    var imgHeight, imgWidth;
    
    $window.load(function (){
        function fixImage(){
            imgHeight = $window.height() - $header.outerHeight();
            $('.image img').css({'height': imgHeight + 'px'});
            imgWidth = $('.image img').width();
            $('.image').css({'width': imgWidth + 'px'});
        }
        fixImage();
        $window.resize(fixImage);
    });
});


