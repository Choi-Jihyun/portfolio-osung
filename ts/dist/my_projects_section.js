document.addEventListener("DOMContentLoaded", function () {
    var projectListWrapper = document.querySelector('.project_list');
    var projectLi = document.querySelectorAll('.project_list > li');
    var nextBtn = document.querySelector('.button-next');
    var prevBtn = document.querySelector('.button-prev');
    var slideNum = 0;
    var inactiveColor = '#cccccc';
    var activeColor = '#FF9900';
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', goNextProject);
    prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', goPrevProject);
    gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: inactiveColor });
    function goNextProject() {
        gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: '#FF9900' });
        if (slideNum < projectLi.length - 1) {
            projectLi[slideNum].classList.remove('selected');
            slideNum++;
            gsap.to(projectListWrapper, { left: "-" + 28 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == projectLi.length - 1) {
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: inactiveColor });
        }
    }
    function goPrevProject() {
        gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: '#FF9900' });
        if (slideNum > 0) {
            projectLi[slideNum].classList.remove('selected');
            slideNum--;
            gsap.to(projectListWrapper, { left: "-" + 28 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == 0) {
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: inactiveColor });
        }
    }
});
