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

function set_team_skills() {
    var jsonText = '{ "members" : [' +
        '{ "id" : "frank-underwood", "photoshop" : "46" , "illustrator" : "86", "sketch" : "25", "afterEffects" : "95"},' +
        '{ "id" : "walter-white", "photoshop" : "76" , "illustrator" : "26", "sketch" : "65", "afterEffects" : "25"},' +
        '{ "id" : "gregory-house", "photoshop" : "16" , "illustrator" : "100", "sketch" : "78", "afterEffects" : "19"}' +
        '] }';

    var skills = JSON.parse(jsonText);
    var lineWidth = parseFloat($(".member-details .skill .line").css('width'));
    var skillLevel;

    for(var i = 0; i < skills.members.length; i++){
        skillLevel = (lineWidth / 100 * skills.members[i].photoshop) + "px";
        $("#photoshop-skill-percentage-" + skills.members[i].id).text(skills.members[i].photoshop + "%");
        $("#photoshop-skill-line-" + skills.members[i].id).css("width", skillLevel);

        skillLevel = (lineWidth / 100 * skills.members[i].illustrator) + "px";
        $("#illustrator-skill-percentage-" + skills.members[i].id).text(skills.members[i].illustrator + "%");
        $("#illustrator-skill-line-" + skills.members[i].id).css("width", skillLevel);

        skillLevel = (lineWidth / 100 * skills.members[i].sketch) + "px";
        $("#sketch-skill-percentage-" + skills.members[i].id).text(skills.members[i].sketch + "%");
        $("#sketch-skill-line-" + skills.members[i].id).css("width", skillLevel);

        skillLevel = (lineWidth / 100 * skills.members[i].afterEffects) + "px";
        $("#afterEffects-skill-percentage-" + skills.members[i].id).text(skills.members[i].afterEffects + "%");
        $("#afterEffects-skill-line-" + skills.members[i].id).css("width", skillLevel);
    }
}

function display_team_member(id){
    $(".team .card .member").each(function () {
        $(this).css('display', 'none') ;
    });
    $(".team .detail .member-details").each(function () {
        $(this).css('display', 'none') ;
    });

    $('#card-' + id).css('display', "block");
    $('#details-' + id).css('display', "block");

    $('.team .controls .control').each(function () {
        if($(this).hasClass('active')) $(this).removeClass('active');
    });

    $('.control-' + id).addClass("active");
}

function set_team_height() {
    var height = $(".team .detail").css('height');

    $(".team .card").css('height', height);
}

$(document).ready(function(){
    toggle_portfolio("all-projects");

    display_team_member("frank-underwood");
    set_team_skills();
    set_team_height();

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
