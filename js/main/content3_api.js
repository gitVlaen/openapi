// 컨텐츠 3 slide api
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "문학" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {
        console.log(msg);

        var boxs = document.getElementsByClassName('box');

        for (var i = 0; i < boxs.length; i++) {

            $("#list_a >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            $("#list_a >.box").eq(i).append("<h5>" + '<a href="sub2.html">' + str2 + "...</a>" + "</h5>");
            $("#list_a >.box").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "교양" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {
        console.log(msg);

        var boxs = document.getElementsByClassName('box');

        for (var i = 0; i < boxs.length; i++) {

            $("#list_b >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            $("#list_b >.box").eq(i).append("<h5>" + '<a href="sub2.html">' + str2 + "...</a>" + "</h5>");
            $("#list_b >.box").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "경제" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {
        console.log(msg);

        var boxs = document.getElementsByClassName('box');

        for (var i = 0; i < boxs.length; i++) {

            $("#list_c >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            $("#list_c >.box").eq(i).append("<h5>" + '<a href="sub2.html">' + str2 + "...</a>" + "</h5>");
            $("#list_c >.box").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "아동" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {
        console.log(msg);

        var boxs = document.getElementsByClassName('box');

        for (var i = 0; i < boxs.length; i++) {

            $("#list_d >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            $("#list_d >.box").eq(i).append("<h5>" + '<a href="sub2.html">' + str2 + "...</a>" + "</h5>");
            $("#list_d >.box").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어학" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {
        console.log(msg);

        var boxs = document.getElementsByClassName('box');

        for (var i = 0; i < boxs.length; i++) {

            $("#list_e >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            $("#list_e >.box").eq(i).append("<h5>" + '<a href="sub2.html">' + str2 + "...</a>" + "</h5>");
            $("#list_e >.box").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");

        }

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "cosmos" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {
        console.log(msg);

        var boxs = document.getElementsByClassName('box');

        for (var i = 0; i < boxs.length; i++) {

            $("#list_f >.box").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            $("#list_f >.box").eq(i).append("<h5>" + '<a href="sub2.html">' + str2 + "...</a>" + "</h5>");
            $("#list_f >.box").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");

        }
    });
