/**
 * Created by Maxim on 03.09.2016.
 */

function toggle_portfolio(id) {
    var toHide = null;

    $('.selection').each(function(){
        
        if($(this).css("display") == "block") {
            toHide = $(this);
        }
    });

    if(toHide){
        toHide.fadeOut(1500, function () {
            $('#' + id).fadeIn(1500);
        });
    }
    else {
        $('#' + id).fadeIn(1500);
    }

    $(".button-list button").removeClass("active");
    $("." + id).toggleClass("active");
    return 0;
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
