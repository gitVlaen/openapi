// 컨텐츠 1 API
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "빅토리 노트" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        $("#recommendslide li:first-child a").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#recommendslide li:first-child a").append("<h3>" + msg.documents[0].title + "</h3>");
        $("#recommendslide li:first-child a").append("<h5>" + msg.documents[0].authors[0] + "</h5>");
        $("#recommendslide li:first-child a").append("<p>" + msg.documents[0].contents + "</p>");

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "엄청나게 커다란 소원" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        var str = msg.documents[0].title;
        var str2 = str.substring(0, 11);

        var str3 = msg.documents[0].contents;
        var str4 = str3.substring(0, 184);

        $("#recommendslide li:nth-child(2) a").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#recommendslide li:nth-child(2) a").append("<h3>" + str2 + "</h3>");
        $("#recommendslide li:nth-child(2) a").append("<h5>" + msg.documents[0].authors[0] + "</h5>");
        $("#recommendslide li:nth-child(2) a").append("<p>" + str4 + "</p>");

    });

$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "나를 살게 하는 것들" },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {

        console.log(msg.documents[0].title);
        console.log(msg.documents[0].thumbnail);

        var str = msg.documents[0].contents;
        var str2 = str.substring(0, 205);

        $("#recommendslide li:nth-child(3) a").append("<img src='" + msg.documents[0].thumbnail + "'/>");
        $("#recommendslide li:nth-child(3) a").append("<h3>" + msg.documents[0].title + "</h3>");
        $("#recommendslide li:nth-child(3) a").append("<h5>" + msg.documents[0].authors[0] + "</h5>");
        $("#recommendslide li:nth-child(3) a").append("<p>" + str2 + "</p>");

    });
