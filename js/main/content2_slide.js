// 컨텐츠 2 slide
function prev1() {
    $('.mediaslide li:last').prependTo('.mediaslide');
    $('.mediaslide').css('margin-left', -380);    // $('.slide').css({marginLeft:-1000});
    $('.mediaslide').stop().animate({ marginLeft: 0 }, 500);
}

function next1() {
    $('.mediaslide').stop().animate({ marginLeft: -380 }, function () {
        $('.mediaslide li:first').appendTo('.mediaslide');
        $('.mediaslide').css({ marginLeft: 0 });
    });
}

function slide1() {
    $('.mediaslide').stop().animate({ marginLeft: -380 }, function () {
        $('.mediaslide li:first').appendTo('.mediaslide');
        $('.mediaslide').css({ marginLeft: 0 });
    });
}

setInterval(slide1, 3000);

$(function () {
    $('.prev1').click(function () {
        prev1();
    });
});

$(function () {
    $('.next1').click(function () {
        next1();
    });
});