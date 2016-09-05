$(document).ready(function (){
    
// jquery slider 

    var $photes = $('.slide-image');
    
    var $holder = $('.slide-holder');
    
    var $slider = $('.slide-app');
    var $firstLine = $slider.find('.first-line div');
    var $secondLine = $slider.find('.second-line div');
    var $text = $slider.find('.title-text');
    
    var $line = $('.loader-line').css('width','0');
    
    var $buttonNext = $('.next');
    var $buttonPrev = $('.prev');
    var counter = 0;

    $photes.each(function(i){
        $(this).css({'background-image':'url("images/slider/slide-'+ (i+1) +'.jpg")','z-index':'0','opacity':'0'});
    });
    $photes.eq(0).css({'opacity':'1','z-index':'1'});
    
    function fadeffect(){
        $firstLine.animate({'top':'0px'}, 1000);
        $secondLine.animate({'bottom':'0px'}, 1000);
        $text.animate({'top':'0'},{queue: false, duration: 1000});
        $text.animate({'opacity':'1'}, 1500);
    }
    function zIndex($el, index){
        $el.css({'z-index': index});
    }
    function loadText($el){
        var ftext = $el.find('.first-line').text();
        var stext = $el.find('.second-line').text();
        var ttext = $el.find('.title-text').text();
        $firstLine.text(ftext);
        $secondLine.text(stext);
        $text.text(ttext);
    }
    function lineRestart(){
        $line.stop(true,true).css('width','0').animate({'width':'200px'}, 7000, 'swing');
    }
    
    
    function nextSlide(){
        var $current = $holder.eq(counter);      
        var $next = $current.next();
        
        if(counter === ($photes.length-1)){
            $next = $holder.eq(0);
            counter = -1;
        }
               
        $firstLine.animate({'top':'65px'}, 1000);
        $secondLine.animate({'bottom':'65px'}, 1000);
        $text.animate({'opacity':'0'},{queue: false, duration: 500});
        $text.animate({'top':'60px'}, 1000, function(){
            loadText($next);
            fadeffect();
        });
        
        var $prevImage = $current.find('.slide-image');
        var $nextImage = $next.find('.slide-image');
        
        $prevImage.animate({'left':'20px','opacity':'0'}, 2000, function (){$(this).css({'z-index':'0','left':'0','top':'0'});});
        $nextImage.animate({'top':'20px','opacity':'1'}, 2000, function (){$(this).css({'z-index':'1'});});
        
//        TweenMax.fromTo($prevImage,1,{scale:1,opacity:1},{scale:1.1,opacity:0,onComplete:zIndex($prevImage, 0)});
//        TweenMax.fromTo($nextImage,2,{scale:1.1,opacity:0},{scale:1,opacity:1,onComplete:zIndex($nextImage, 1)});
        
        counter ++;
    }
    
    function prevSlide(){
        var $current = $holder.eq(counter);
        var $prev = $current.prev();
        
        if(counter === 0){
            $prev = $holder.eq($photes.length-1);
            counter = $photes.length;
        }
        
        $firstLine.animate({'top':'65px'}, 1000);
        $secondLine.animate({'bottom':'65px'}, 1000);
        $text.animate({'opacity':'0'},{queue: false, duration: 500});
        $text.animate({'top':'60px'}, 1000, function(){
            loadText($prev);
            fadeffect();
        });
        
        var $prevImage = $current.find('.slide-image');
        var $nextImage = $prev.find('.slide-image');
        
        $prevImage.animate({'left':'20px','opacity':'0'}, 2000, function (){$(this).css({'z-index':'0','left':'0','top':'0'});});
        $nextImage.animate({'top':'20px','opacity':'1'}, 2000, function (){$(this).css({'z-index':'1'});});

//        TweenMax.fromTo($prevImage,1,{scale:1,opacity:1},{scale:1.1,opacity:0,onComplete:zIndex($prevImage, 0)});
//        TweenMax.fromTo($nextImage,2,{scale:1.1,opacity:0},{scale:1,opacity:1,onComplete:zIndex($nextImage, 1)});
        
        counter --;
    }
    
    function nextPos(){ 
        nextSlide();
        lineRestart();
    }
    function prevPos(){
        prevSlide();
        lineRestart();
    }
    
    function startSlider(){
        interval = setInterval(nextPos,7000); 
    }
    function stopSlider(){
        clearInterval(interval);
    }
    
    $buttonNext.on('click', function (e){
        if($firstLine.is(':animated') || $secondLine.is(':animated') || $text.is(':animated')){return false;}
        e.preventDefault();
        nextPos();
    });
    $buttonNext.on('mouseenter',stopSlider).on('mouseleave',startSlider);
    
    $buttonPrev.on('click', function (e){
        if($firstLine.is(':animated') || $secondLine.is(':animated') || $text.is(':animated')){return false;}
        e.preventDefault();
        prevPos();
    });
    $buttonPrev.on('mouseenter',stopSlider).on('mouseleave',startSlider);
    
    nextPos();
    startSlider();
});


