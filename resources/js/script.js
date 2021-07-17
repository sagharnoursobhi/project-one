$(document).ready(function(){

  var body = $('body');
    var iconWhite = $('.js-menu-trigger-white');
    var iconBlue =$('.js-menu-trigger-blue')

    iconWhite.on('click' , function(){
        body.removeClass('firstMenu-is-active');
        body.addClass('menu-is-active');
    })
    iconBlue.on('click' , function(){
        body.removeClass('menu-is-active');
        body.addClass('firstMenu-is-active');
        
    })
    $(window).on("scroll" , function(){
        var scrollFromTop = $(window).scrollTop();
        $("body").toggleClass("scroll" , (scrollFromTop > 150));//scroll from top of window to the part which is less than 350px

    })//scroll class is added to body
});

