$(document).ready(function(){

  // var body = $('body');
  //     var menuTrigger = $('.js-menu-trigger');

  //     menuTrigger.on('click', function(){
  //       body.addClass('menu-is-active');
  //     });


  //     $('.menu').on('click', function(){
  //         $('body').removeClass("menu-is-active");
  //     });

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
});


//removing classes of owl carousels
// let removeHover = document.querySelector('.item-zoom');
// var x = window.matchMedia("(max-width: 1000px) and (min-width:0)")
// myFunction(x);
// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     removeHover.style.pointerEvents= 'none';
// }
// }

