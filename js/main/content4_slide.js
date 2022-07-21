// 컨텐츠4-1 slide
function prev2() {
    $('#activeslide li:last').prependTo('#activeslide');
    $('#activeslide').css('margin-left', -350);    // $('.slide').css({marginLeft:-1000});
    $('#activeslide').stop().animate({ marginLeft: 0 }, 800);
}

function next2() {
    $('#activeslide').stop().animate({ marginLeft: -350 }, function () {
        $('#activeslide li:first').appendTo('#activeslide');
        $('#activeslide').css({ marginLeft: 0 });
    });
}

function slide3() {
    $('#activeslide').stop().animate({ marginLeft: -350 }, function () {
        $('#activeslide li:first').appendTo('#activeslide');
        $('#activeslide').css({ marginLeft: 0 });
    });
}

setInterval(slide3, 3000);

$(function () {
    $('.prev2').click(function () {
        prev2();
    });
});

$(function () {
    $('.next2').click(function () {
        next2();
    });
});
