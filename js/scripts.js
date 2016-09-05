/**
 * Created by Maxim on 03.09.2016.
 */

var teamDataJson = '{ "members" : [' +
    ' { "id" : "frank-underwood",' +
        ' "fullName" : "Frank Underwood", ' +
        ' "role" : "Congressman", ' +
        ' "description" : "Francis J. \\"Frank\\" Underwood is a fictional character and the protagonist of the American version of House of Cards. He is portrayed by Kevin Spacey." ,' +
        ' "image" : "member-1.png",' +
        ' "photoshop" : "14",' +
        ' "illustrator" : "25",' +
        ' "sketch" : "86",' +
        ' "afterEffects" : "56"  } , ' +
        '{ "id" : "walter-white",' +
        ' "fullName" : "Walter White",' +
        ' "role" : "Drug dealer",' +
        ' "description" : "Walter Hartwell White Sr. is a fictional character and the main protagonist of Breaking Bad, portrayed by Bryan Cranston.",' +
        ' "image" : "member-2.png",' +
        ' "photoshop" : "65",' +
        ' "illustrator" : "86",' +
        ' "sketch" : "21",' +
        ' "afterEffects" : "34"  } , ' +
        '{ "id" : "gregory-house",' +
        ' "fullName" : "Gregory House",' +
        ' "role" : "Doctor",' +
        ' "description" : "Gregory House, MD — typically referred to simply as House — is the title character of the American medical drama series House.",' +
        ' "image" : "member-3.png",' +
        ' "photoshop" : "56",' +
        ' "illustrator" : "75",' +
        ' "sketch" : "99",' +
        ' "afterEffects" : "46"  } ' +
    '],' +
    '"skills" : ["photoshop", "illustrator", "sketch", "afterEffects"] }';

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

function set_team_height(){
    var height = $('.team .team-member .details').css('height');
    $('.team .team-member .card').css('height', height);
}

function display_team_member(id){
    var data = JSON.parse(teamDataJson);

    for(var i = 0; i < data.members.length; i++){
        if(data.members[i].id == id) var current = data.members[i];
    }

    $('#member-name').fadeOut(750, function () {
        $(this).text(current.fullName);
        $(this).fadeIn(750);
    });

    $('#member-role').fadeOut(750, function () {
        $(this).text(current.role);
        $(this).fadeIn(750);
    });

    $('img#member-img').fadeOut(750, function () {
        $(this).attr('src', 'images/team/' + current.image);
        $(this).fadeIn(750);
    });

    $('#member-description').fadeOut(750, function () {
        $(this).text(current.description);
        $(this).fadeIn(750);
    });
    var skillLineWidth = parseFloat($('.line').css('width')) / 100;
    var width = skillLineWidth * current.photoshop + "px";

    $('.photoshop .line .level').animate({width: width}, 1500);
    width = skillLineWidth * current.illustrator + "px";
    $('.illustrator .line .level').animate({width: width}, 1500);
    width = skillLineWidth * current.sketch + "px";
    $('.sketch .line .level').animate({width: width}, 1500);
    width = skillLineWidth * current.afterEffects + "px";
    $('.afterEffects .line .level').animate({width: width}, 1500);

    function set_percentage(id,value){
        var currentPercentage = parseInt($('.' + id + ' .percentage').text());
        var speed = 1500 / Math.abs(currentPercentage - value);
        setInterval(function(){
            if(currentPercentage < value) {
                currentPercentage++;
            }
            else if(currentPercentage > value){
                currentPercentage--;
            }
            else return 0;
            $('.' + id + ' .percentage').text(currentPercentage + "%");
        },speed);
    }

    set_percentage('photoshop', current.photoshop);
    set_percentage('illustrator', current.illustrator);
    set_percentage('sketch', current.sketch);
    set_percentage('afterEffects', current.afterEffects);

    $('.control').removeClass('active');
    $('.control-' + id).addClass('active');
}

$(document).ready(function(){
    toggle_portfolio("all-projects");
    set_team_height();
    display_team_member('frank-underwood');


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

    $('#map-trigger').on('click', function () {
        if($(this).attr('src') == 'images/arrow-down.png'){
            $(this).attr('src', 'images/arrow-up.png');
            $('#map-container').slideDown(1000);
        }
        else {
            $(this).attr('src', 'images/arrow-down.png');
            $('#map-container').slideUp(1000);
        }
    });

    $('#menu-button').on('click', function () {
        if($('#right-navigation').css('right') == '0px') $('#right-navigation').animate({right: '-150px'});
        else $('#right-navigation').animate({right: '0px'});
    });

    var clientSliderWidth = $('.clients-slider .slide').width();

    $('.clients-slider .arrow').bind('click', function () {
        var firstSlide = $('.clients-slider .slide:first');
        var lastSlide = $('.clients-slider .slide:last');
        if($(this).attr('id') == '#slide-client-left') {
            var temp = firstSlide;
            firstSlide.remove();
            $(temp).insertAfter(lastSlide);
        }
        else if($(this).attr('id') == '#slide-client-right') {
            var temp = lastSlide;
            lastSlide.remove();
            $(temp).insertBefore(firstSlide);
        }
    });
});
