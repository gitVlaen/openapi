// 슬라이드 변환
$(function () {
    var i = 0;

    $(".slidernavi li").mouseenter(function () {
        i = $(this).index();
    });

    function slide() {
        i++;
        if (i > $("#slideimg li:last").index()) {
            i = 0;
        }
        $("#slideimg li").eq(i).stop().fadeIn("slow");
        $("#slideimg li").eq(i - 1).stop().fadeOut();

        if (i == 1) {
            $("#slider").css({ "background": "#f7cd10" });
            $(".slidernavi li").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $(".slidernavi li").eq(i).css({ "border-top": "3px solid red" });
            $(".slidernavi li").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 2) {
            $("#slider").css({ "background": "#e0d1fc" });
            $(".slidernavi li").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $(".slidernavi li").eq(i).css({ "border-top": "3px solid red" });
            $(".slidernavi li").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else if (i == 3) {
            $("#slider").css({ "background": "#fff7d2" });
            $(".slidernavi li").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $(".slidernavi li").eq(i).css({ "border-top": "3px solid red" });
            $(".slidernavi li").eq(i).siblings().css({ "border-top": "1px solid black" });
        } else {
            $("#slider").css({ "background": "#f5ebd9" });
            $(".slidernavi li").eq(i - 1).css({ "color": "black", "border-top": "none" });
            $(".slidernavi li").eq(i).css({ "border-top": "3px solid red" });
            $(".slidernavi li").eq(i).siblings().css({ "border-top": "1px solid black" });
        }
    }

    $(".slidernavi li").eq(0).mouseenter(function () {
        $("#slider").css({ "background": "#f5ebd9" });
        $(".slidernavi li").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $("#slideimg li").stop().fadeOut();
        $("#slideimg li").eq(0).stop().fadeIn("slow");
    });
    $(".slidernavi li").eq(1).mouseenter(function () {
        $("#slider").css({ "background": "#f7cd10" });
        $(".slidernavi li").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $("#slideimg li").stop().fadeOut();
        $("#slideimg li").eq(1).stop().fadeIn("slow");
    });
    $(".slidernavi li").eq(2).mouseenter(function () {
        $("#slider").css({ "background": "#e0d1fc" });
        $(".slidernavi li").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $("#slideimg li").stop().fadeOut();
        $("#slideimg li").eq(2).stop().fadeIn("slow");
    });
    $(".slidernavi li").eq(3).mouseenter(function () {
        $("#slider").css({ "background": "#fff7d2" });
        $(".slidernavi li").css({ "border-top": "none" });
        $(this).css({ "border-top": "3px solid red" });
        $(this).siblings().css({ "border-top": "1px solid black" });
        $("#slideimg li").stop().fadeOut();
        $("#slideimg li").eq(3).stop().fadeIn("slow");
    });

    var ani = setInterval(slide, 3000);

    $(".slidernavi li").mouseover(function () {
        clearInterval(ani);
    });

    $(".slidernavi li").mouseout(function () {
        $(this).css({ "border-top": "3px solid red" });
        ani = setInterval(slide, 3000);
    });
});

// 도서 순위
$(function () {
    $(".rankmenu li").eq(0).click(function () {
        $(".rankdiv3").show();
        $(".rankdiv4").hide();
        $(this).css({ "border": "1px solid rgba(255,255,255,0.3)", "border-bottom": "none" });
        $(".rankmenu li").eq(1).css({ "border": "none", "border-bottom": "1px solid rgba(255,255,255,0.3)" });
    });

    $(".rankmenu li").eq(1).click(function () {
        $(".rankdiv4").show();
        $(".rankdiv3").hide();
        $(this).css({ "border": "1px solid rgba(255,255,255,0.3)", "border-bottom": "none" });
        $(".rankmenu li").eq(0).css({ "border": "none", "border-bottom": "1px solid rgba(255,255,255,0.3)" });
    });
});