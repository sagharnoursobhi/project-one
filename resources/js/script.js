$(document).ready(function () {
    //responsive menu

    var body = $('body');
    var menuTrigger = $('.js-menu-trigger');

    menuTrigger.on('click' , function(){
        body.addClass('menu-is-active');
    })
    $('.menu').on('click' , function(){
        body.removeClass('menu-is-active');
    })

    $('.menu li a').on('click' , function(){
        body.removeClass('menu-is-active');
    })
});