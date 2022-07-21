// 저자의 다른 책 API
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "더블린" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        var boxs = document.getElementsByClassName('innerbox1');

        for (var i = 0; i < boxs.length; i++) {
            $(".innerbox1").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

            var boxstr = msg.documents[i].title;
            var boxstr2 = boxstr.substring(0, 12);
            $(".innerbox1").eq(i).append("<h3>" + boxstr2 + "</h3>");
            $(".innerbox1").eq(i).append("<span>" + msg.documents[i].price + " 원</span>");
        }
    });
