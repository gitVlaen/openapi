// 상품구매정보 API
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "율리시스" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        $("#booktitle").append("<h3>" + msg.documents[0].title +
            "</h3>" + "<span> : 모더니즘 문학의 선언 [양장]</span>" + "<br>" +
            "<span>" + "원제 : Ulysess" + "</span>" + "<span>" + "소득공제" + "</span>");

        $("#itemimg").append("<img src='" + msg.documents[0].thumbnail + "'/>");

        $(".pricenum").append(msg.documents[0].price + "원");

        $("#bookinfo li:first-child").append("<span> 저 : " + msg.documents[0].authors + "</span>");

        $("#bookinfo li:nth-child(3)").append("<span> 번 : " + msg.documents[0].translators + "</span>");

        $("#bookinfo li:nth-child(5)").append("<span> 출판사 : " + msg.documents[0].publisher + "</span>");

        var str = msg.documents[0].datetime;
        var str2 = str.substring(0, 10);

        $("#bookinfo li:nth-child(7)").append("<span> 발행 : " + str2 + "</span>");

        $("#bookinfo li:last-child").append("<span> ISBN : " + msg.documents[0].isbn + "</span>");
    });

// 상품 title
$(function () {
    $("sub_box h4").text(msg.documents[0].title);
});
