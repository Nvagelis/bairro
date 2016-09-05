$(document).ready(function (){
   
    function widTwo(){
        var widul = $('.list-row-container').width();
        var wid = widul - 350;

        if($(window).width() > 600){
            $('.list-row-container').css({'width':'100%'});
            $('.item-name').width(wid);
            $('.menu-lists').css({'width':'100%'});
        }else{
            $('.item-name').width(240);
            $('.list-row-container').css({'width':'600px'});
            $('.menu-lists').css({'width':'660px'});
        }
      }
  
    widTwo();
    $(window).resize(function(){
        widTwo();
    });    
});


