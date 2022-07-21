// 별점 동기화
const starrating = (target) => {
    document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
}
