 $(document).ready(function (){
 /* ---------- main menu ------------*/
    
    var $body = $('body');
    var $menuButton = $('.menu-button');
    var $lItems = $('.litem');
    var $line = $('.mv-l');
    var $footer = $('.nav-footer');
    var $dataNav = $('.data-nav');
    var $sabData = $('.sub-data');
    var $wall = $('.nav-cont');
    var aniMenu = true;

   
    function setdef(){
        $lItems.css({'opacity':'0','top':'-30px'});
        $line.css({'opacity':'0'});
        $footer.css({'opacity':'0'});
        $dataNav.css({'opacity':'0','top':'50px'});
        $sabData.css({'opacity':'0','top':'50px'});
    }
    function animateList(){
        $lItems.each(function (i){
            $(this).stop().delay(500).animate({'opacity':'1','top':'0'}, (i+1)*300);
        });
    }
   
    function closeMenu(){
        $menuButton.addClass('close');
        $('.hd-navigation ul').css('opacity','1');
        $body.css('overflow','auto');
        setdef();
        $wall.animate({'width':'0'},500, function(){
            $('.main-navigation').css('z-index','-1');
            aniMenu = true;
        });    
    }
    
    function openMenu(){
        $menuButton.removeClass('close');
        $('.main-navigation').css('z-index','10');
        $('.hd-navigation ul').css('opacity','0');
        $body.css('overflow','hidden');
        $wall.animate({'width':'50%'},500);
        animateList();
        $footer.stop().delay(1500).animate({'opacity':'1'},1000);
        $dataNav.stop().delay(500).animate({'opacity':'1','top':'0'},800);
        $sabData.stop().delay(500).animate({'opacity':'1','top':'0'},1000);
        $line.stop().delay(1500).animate({'opacity':'1'},1000, function (){
            aniMenu = true;
        });
    }
    
    setdef();
    
    $menuButton.on('click', function (){
        if(aniMenu){
            aniMenu = false;
            if($menuButton.hasClass('close')){
                openMenu();   
            } else{
                closeMenu();
            }
        }
    });

});
