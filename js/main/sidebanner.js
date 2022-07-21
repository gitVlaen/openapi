// 왼편 광고
var indexA = 0;

function IMG(imgPath) {
    this.imgPath = imgPath;
    this.printImg = function () {
        image1.setAttribute("src", imgPath);
    };
};

var img1 = new IMG("img/banner5.jpg");
var img2 = new IMG("img/banner6.jpg");
var img3 = new IMG("img/banner7.jpg");

this.onclick = function (e) {
    if (e.target.id == "sidebprev" || e.target.id == "sidebnext") {
        if (e.target.id == "sidebprev") { indexA--; }

        if (e.target.id == "sidebnext") { indexA++; }

        if (indexA < 0) { indexA = 3; indexA--; }

        if (indexA > 2) { indexA = -1; indexA++; }

        switch (indexA) {

            case 0: img1.printImg(); break;
            case 1: img2.printImg(); break;
            case 2: img3.printImg(); break;

        };
    };
};
