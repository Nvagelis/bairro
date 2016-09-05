$(document).ready(function (){

    
/* -------------- Tween Max Slider -------------------- */

    var $holder = $('.slide-holder');
    var $buttonNext = $('.next');
    var $buttonPrev = $('.prev');
    var $line = $('.loader-line').css('width','0');
    var $slider = $('.slide-app');
    var $firstLine = $slider.find('.first-line div');
    var $secondLine = $slider.find('.second-line div');
    var $text = $slider.find('.title-text');
    var photes = $('.slide-image');
    var current = 0;
    
    photes.each(function(i){
        $(this).css({'background-image':'url("images/slider/slide-'+ (i+1) +'.jpg")'});
    });
    TweenMax.set(photes.filter(":gt(0)"), {opacity:0});

    function loadtext($el, $line){
        var text = $holder.eq(current).find($el).text();
        $line.text(text);
    }
    function nextSlide(){
        var tl = new TimelineMax({});
        tl
            .to($firstLine,1,{top: '65px',onComplete:loadtext, onCompleteParams:['.first-line', $firstLine]})
            .to($firstLine,1,{top: 0})
            .to($secondLine,1,{bottom: '65px',onComplete:loadtext, onCompleteParams:['.second-line', $secondLine]},'-=2')
            .to($secondLine,1,{bottom: 0},'-=1')
            .to($text,1,{opacity: 0, top: '65px',onComplete:loadtext, onCompleteParams:['.title-text', $text]},'-=2')
            .to($text,1,{opacity: 1,top: 0},'-=1')
            .fromTo($line,6,{width:0},{width:'200px'},'-=2')
            .to(photes.eq(current),1,{opacity:0,scale:1.1},'-=6');
        current = ++current % photes.length;
        tl
            .fromTo(photes.eq(current),2,{opacity:0,scale:1.1},{opacity:1,scale:1},'-=6');  
        return tl;
    }
    function prevSlide(){
        var tl = new TimelineMax({});
        tl
            .to($firstLine,1,{top: '65px',onComplete:loadtext, onCompleteParams:['.first-line', $firstLine]})
            .to($firstLine,1,{top: 0})
            .to($secondLine,1,{bottom: '65px',onComplete:loadtext, onCompleteParams:['.second-line', $secondLine]},'-=2')
            .to($secondLine,1,{bottom: 0},'-=1')
            .to($text,1,{opacity: 0, top: '65px',onComplete:loadtext, onCompleteParams:['.title-text', $text]},'-=2')
            .to($text,1,{opacity: 1,top: 0},'-=1')
            .fromTo($line,6,{width:0},{width:'200px'},'-=2')
            .to(photes.eq(current),1,{opacity:0,scale:1.1},'-=6');
        current = --current % photes.length;
        tl
            .fromTo(photes.eq(current),2,{opacity:0,scale:1.1},{opacity:1,scale:1},'-=6');
        return tl;
    }
    
    function startSlider(){
        interval = setInterval(nextSlide,6000); 
    }
    function stopSlider(){
        clearInterval(interval);
    }

    $buttonNext.click(function(e) {
        e.preventDefault();
        stopSlider();
        nextSlide();
        startSlider();
    });

    $buttonPrev.on('click', function (e){
        e.preventDefault();
        stopSlider();
        prevSlide();
        startSlider();
    });
    nextSlide();
    startSlider();
});