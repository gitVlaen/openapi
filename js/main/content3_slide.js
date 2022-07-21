// 컨텐츠 3 slide
$(function () {
    var i = 0;
    $("#booklist > li").mouseenter(function () {
        i = ($(this).index()) + 1
        $("#recommendwrap2 > article").hide()
        $("#recommendwrap2 > article:nth-of-type" + "(" + i + ")").stop().fadeIn("fast")
    })
});