$(function(){
    
    $(".single-img.v1>.opacity .pop_btn li").click(function(){
        
        $(".popup_container.v1").fadeIn();
        $("body").css('overflow','hidden');
    });
    
    $(".single-img.v2>.opacity .pop_btn li").click(function(){
        
        $(".popup_container.v2").fadeIn();
        $("body").css('overflow','hidden');
    });
   
    
    $(".single-img.v3>.opacity .pop_btn li").click(function(){
        
        $(".popup_container.v3").fadeIn();
        $("body").css('overflow','hidden');
    });
    
    
     
    $(".popup_close").click(function(){
        
        $(".popup_container").fadeOut();
        $("body").css('overflow','inherit');
    })
    
    
    
});