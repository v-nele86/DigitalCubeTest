$(document).ready(function(){
    
    
    $('.menu-button').click(function(){
        $(this).next().addClass('active');
        $('.main-menu-overlay').show();
    });
    
    $('.main-menu-overlay').click(function(){
        $('.main-menu-wrapper').removeClass('active');
        $(this).hide();
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});//**************************************************END**************************************************