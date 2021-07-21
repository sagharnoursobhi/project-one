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
    $('#contactForm').on('submit', (e) => {
        e.preventDefault();
        const data = objectifyForm($('#contactForm').serializeArray());
        emailSender(data.name, data.phone, data.email, data.message);
        $('#contactForm').find('input').val('');
    });
    $('#modalForm').on('submit', (e) => {
        e.preventDefault();
        const data = objectifyForm($('#modalForm').serializeArray());
        emailSender(data.name, data.phone, data.email, data.message);
        $('#modalForm').find('input').val('');
        $('#modal-window-two').modal('hide')
    });
});

function emailSender(name, phone, email, message) {
    if (name && phone && email && message) {
        $.ajax({
            type: 'POST',
            url: './mailer.php',
            data: {name, phone, email, message},
            success: (response) => {
                if (response.status === 'ok') {
                    toastr.success('Ditt meddelande mottaget och vi kommer att kontakta dig så snart som möjligt.')
                } else {
                    toastr.error('något fel inträffade, försök igen senare.');
                }
            },
            error: (e) => {
                console.log(e);
                toastr.error('något fel inträffade, försök igen senare.')
            }
        });
    } else {
        toastr.error('Fyll i alla ingångar.')
    }
}

function objectifyForm(formArray) {
    //serialize data function
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++){
        returnArray[formArray[i]['name']] = formArray[i]['value'];
    }
    return returnArray;
}

