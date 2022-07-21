// 컨텐츠2 slide2

var indexAB = 0;

function IMG2(imgPath2) {
    this.imgPath2 = imgPath2;
    this.printImg2 = function () {
        whynotad1.setAttribute("src", imgPath2);
    };
};

var img4 = new IMG2("img/banner9.jpg");
var img5 = new IMG2("img/banner10.jpg");

this.onclick = function (ele) {
    if (ele.target.id == "prev2" || ele.target.id == "next2") {
        if (ele.target.id == "prev2") { indexAB--; }

        if (ele.target.id == "next2") { indexAB++; }

        if (indexAB < 0) { indexAB = 2; indexAB--; }

        if (indexAB > 1) { indexAB = -1; indexAB++; }

        switch (indexAB) {

            case 0: img4.printImg2(); break;
            case 1: img5.printImg2(); break;

        };
    };
};

