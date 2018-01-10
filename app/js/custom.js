$(function() {
    //E-mail Ajax Send
    // Documentation & Example: https://github.com/agragregra/uniMail
    // $("form").submit(function() { //Change
    //     var th = $(this);
    //     $.ajax({
    //         type: "POST",
    //         url: "../mail.php", //Change
    //         data: th.serialize()
    //     }).done(function() {
    //        console.log(data);
    //         setTimeout(function() {
    //             // Done Functions
    //             th.trigger("reset");
    //         }, 1000);
    //     });
    //     return false;
    // });


    // no dragstart img
    $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

//mob menu
$(".menu-mob").click(function () {
    $(".main-menu").slideToggle();
});



// Options
var options = {
    offset: 150
};

// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.header', options);

$(".header.headhesive .menu-mob").click(function () {
    $(".header.headhesive .main-menu").slideToggle();
});

//to top arrow
$(document).ready(function(){


    $(".to-top").on('click', function (e) {
        e.preventDefault();
        var id  = $(this).attr('href'),

            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


});


//main form popup
$('.popup-with-form').magnificPopup({
    type: 'inline',
    focus: '#name'
});


//tabs popup main

(function($) {
    $(function() {

        $('ul.menu-popup').on('click', 'li:not(.active)', function(e) {
            e.preventDefault();
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.wrap-menu-popup').find('div.tab').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);


//file input

document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),
    button     = document.querySelector( ".input-file-trigger" );


button.addEventListener( "keydown", function( event ) {
    if ( event.keyCode == 13 || event.keyCode == 32 ) {
        fileInput.focus();
    }
});
button.addEventListener( "click", function( event ) {
    fileInput.focus();
    return false;
});
