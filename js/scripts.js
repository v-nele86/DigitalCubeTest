$(document).ready(function(){
    
    
    $('.menu-button').click(function(){
        $(this).next().addClass('active');
        $('.main-menu-overlay').show();
    });
    
    $('.main-menu-overlay').click(function(){
        $('.main-menu-wrapper').removeClass('active');
        $(this).hide();
    });
    
    
    
    var screenSize = {
        'screenLgSize': '992px',
        'screenRealSize': function(){
            return $('.lead').css('width');
        }
    };
    
    console.log(screenSize.screenLgSize, screenSize.screenRealSize());
    
//    var screenSize = $('.lead').css('width');
//    var screenLargeSize = 992px;
    if(screenSize.screenRealSize() < screenSize.screenLgSize){
        
        var heightRedItem = $('.lead-item.bg-red').css('width');
        $('.lead-item.bg-red').css('height', heightRedItem);

        var heightBlueItem = $('.lead-item.bg-blue').css('width');
        var heightOtherItems = Number(heightBlueItem);
        $('.lead-item.bg-blue').css('height', heightOtherItems);
        $('.lead-item.bg-dark-purple').css('height', heightOtherItems);
        $('.lead-item.bg-yellow').css('height', heightOtherItems);
        
        console.log(heightBlueItem);
        console.log(typeof heightBlueItem);
    }else{
        
        var heightRedItem = $('.lead-item.bg-red').css('width');
        $('.lead-item.bg-red').css('height', heightRedItem);

        var heightBlueItem = $('.lead-item.bg-blue').css('width');
        $('.lead-item.bg-blue').css('height', heightBlueItem);

        var heightPurpleItem = heightBlueItem;
        $('.lead-item.bg-dark-purple').css('height', heightPurpleItem);

        var heightYellowItem = heightBlueItem;
        $('.lead-item.bg-yellow').css('height', heightYellowItem);
        
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});//**************************************************END**************************************************