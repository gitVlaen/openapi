// 컨텐츠 4-2 api
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: {
        query: "DVD"
    },
    headers: { Authorization: "KakaoAK 43b725f12304b457979435b4f2859bf2" }
})
    .done(function (msg) {
        console.log(msg);

        var boxs = document.getElementsByClassName('staticbox2');

        for (var i = 0; i < boxs.length; i++) {

            $(".staticbox .staticbox2").eq(i).append('<a href="#">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");


            var str = msg.documents[i].title;
            var str2 = str.substring(0, 10);

            $(".staticbox .staticbox2").eq(i).append("<h5>" + '<a href="sub2.html">' + str2 + "...</a>" + "</h5>");
            $(".staticbox .staticbox2").eq(i).append("<h6>" + msg.documents[i].price + "원</h6>");

        }
    });