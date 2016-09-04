/**
 * Created by Maxim on 03.09.2016.
 */

function toggle_portfolio(id) {
    var toHide = null;

    $('.selection').each(function(){

        if($(this).css("display") == "block") {
            toHide = $(this);
            return 1;
        }
    });

    var buttons = $(".button-list button");

    buttons.attr('disabled','disabled');

    if(toHide){
        toHide.fadeOut(1000, function () {
            $('#' + id).fadeIn(1000, function () {
                buttons.removeAttr('disabled');
            });
        });
    }
    else {
        $('#' + id).fadeIn(1000, function () {
            buttons.removeAttr('disabled');
        });
    }
    buttons.removeClass("active");
    $("." + id).toggleClass("active");
}

$(document).ready(function(){
    toggle_portfolio("all-projects");

    $('.play-btn button').on('click', function(){
        document.getElementById('video').play();
        $('.video-container .overlay').fadeOut('slow');
    });

    $('.video-container .overlay').on('click', function(){
        document.getElementById('video').play();
        $('.video-container .overlay').fadeOut('slow');
    });

    $('#video').on('click', function(){
        document.getElementById('video').pause();
        $('.video-container .overlay').fadeIn('slow');
    });
});
