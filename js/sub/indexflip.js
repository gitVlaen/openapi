// 책 인덱스 toggle
function indexflip() {
    if (document.getElementById('indexwrap').style.height === '300px') {
        document.getElementById('indexwrap').style.height = 'auto';
        document.getElementById('indbtn').textContent = '접기';
    } else {
        document.getElementById('indexwrap').style.height = '300px';
        document.getElementById('indbtn').textContent = '펼치기';
    }
}
