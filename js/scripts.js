/**
 * Created by Maxim on 03.09.2016.
 */

function toggle_portfolio(id) {
    $('.selection').fadeOut('slow');
    $("#" + id).fadeIn("slow");
    $(".button-list a").removeClass("active");
    $("." + id).toggleClass("active");
    return false;
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
