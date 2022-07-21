// 광고 창 닫기 기능
$(document).ready(function () {
    $("#closebtn1").click(function () {
        $("#topbanner").hide();
    });
});

// 로그인창 토글
$(document).ready(function () {
    $('.menu1 > li').click(function () {
        $(this).children('.sub1').stop().slideToggle();
    });
});

// 하위 항목 토글
$(document).ready(function () {
    $('.allnavi').click(function () {
        $(this).children('#subcateg').stop().toggle();
    });
});