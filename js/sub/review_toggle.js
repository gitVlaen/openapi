// 리뷰 토글
function revflip() {
    if (document.getElementById('reviewbox').style.height === '210px') {
        document.getElementById('reviewbox').style.height = '520px';
        document.getElementById('revbtn').textContent = '접기';
    } else {
        document.getElementById('reviewbox').style.height = '210px';
        document.getElementById('revbtn').textContent = '펼치기';
    }
}
