// 추천도서 API
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "문학" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        var boxs2 = document.getElementsByClassName('contentbox1');

        for (var i = 0; i < boxs2.length; i++) {
            $(".contentbox1").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

            var boxstr3 = msg.documents[i].title;
            var boxstr4 = boxstr3.substring(0, 8);

            $(".contentbox1").eq(i).append("<h3>" + boxstr4 + "... </h3>");
            $(".contentbox1").eq(i).append("<span>" + msg.documents[i].price + " 원</span>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "영미" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        var boxs3 = document.getElementsByClassName('contentbox2');

        for (var i = 0; i < boxs3.length; i++) {
            $(".contentbox2").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

            var boxstr5 = msg.documents[i].title;
            var boxstr6 = boxstr5.substring(0, 8);

            $(".contentbox2").eq(i).append("<h3>" + boxstr6 + "... </h3>");
            $(".contentbox2").eq(i).append("<span>" + msg.documents[i].price + " 원</span>");
        }
    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "한국소설" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        var boxs4 = document.getElementsByClassName('contentbox3');

        for (var i = 0; i < boxs4.length; i++) {
            $(".contentbox3").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");

            var boxstr7 = msg.documents[i].title;
            var boxstr8 = boxstr7.substring(0, 8);

            $(".contentbox3").eq(i).append("<h3>" + boxstr8 + "... </h3>");
            $(".contentbox3").eq(i).append("<span>" + msg.documents[i].price + " 원</span>");
        }
    });
