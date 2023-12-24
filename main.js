$(function(){
    
    $('#html,#css,#sass,#js').mouseover(function(){
        $(this).hide();
    })
    $('#html,#css,#sass,#js').mouseout(function(){
        $(this).show();
    })
    
    $('.port1').mouseover(function(){
        
        $('.desc').animate({right:'10px',opacity:1});
        $('.free').animate({right:'10px',opacity:1});
        
    })
    .mouseout(function(){
        // $('.desc,.Project2,.free').animate({opacity:0});
        
        $('.desc').animate({right:'120px',opacity:0});
        $('.free').animate({right:'120px',opacity:0});
        
    })

    $('.port2').mouseover(function(){
        // $('.Project2').animate({opacity:1});
        
        $('.desc2').animate({right:'10px',opacity:1});
        $('.tisskill').animate({opacity:1});
        
        
    })
    .mouseout(function(){
        // $('.desc,.Project2,.free').animate({opacity:0});
        
        $('.desc2').animate({right:'120px',opacity:0});
        $('.tisskill').animate({opacity:0});
        
        
    })

});