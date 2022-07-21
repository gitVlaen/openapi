// 컨텐츠 1 slide
function prev0() {
    $('#recommendslide li:last').prependTo('#recommendslide');
    $('#recommendslide').css('margin-left', -600);    // $('.slide').css({marginLeft:-1000});
    $('#recommendslide').stop().animate({ marginLeft: 0 }, 500);
}

function next0() {
    $('#recommendslide').stop().animate({ marginLeft: -600 }, function () {
        $('#recommendslide li:first').appendTo('#recommendslide');
        $('#recommendslide').css({ marginLeft: 0 });
    });
}

function slide0() {
    $('#recommendslide').stop().animate({ marginLeft: -600 }, function () {
        $('#recommendslide li:first').appendTo('#recommendslide');
        $('#recommendslide').css({ marginLeft: 0 });
    });
}

setInterval(slide0, 3000);

$(function () {
    $('.prev0').click(function () {
        prev0();
    });
});

$(function () {
    $('.next0').click(function () {
        next0();
    });
});
