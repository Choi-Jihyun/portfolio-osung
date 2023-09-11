document.addEventListener("DOMContentLoaded", function () {
    var projectListWrapper = document.querySelector('.project_list');
    var projectViewLi = document.querySelectorAll('.project_info_list > li');
    var projectLi = document.querySelectorAll('.project_list > li');
    var nextBtn = document.querySelector('.button-next');
    var prevBtn = document.querySelector('.button-prev');
    var inactiveColor = '#cccccc';
    var activeColor = '#FF9900';
    var slideNum = 0;
    var selectedSlide = projectLi[0];
    nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', slideNextProject);
    prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', slidePrevProject);
    for (var _i = 0, projectLi_1 = projectLi; _i < projectLi_1.length; _i++) {
        var item = projectLi_1[_i];
        item.addEventListener('click', goThisProject);
    }
    gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: inactiveColor });
    function slideNextProject() {
        gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: '#FF9900' });
        if (slideNum < projectLi.length - 1) {
            projectLi[slideNum].classList.remove('selected');
            slideNum++;
            gsap.to(projectListWrapper, { left: "-" + 27 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == projectLi.length - 1) {
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: inactiveColor });
        }
        showProjectView();
    }
    function slidePrevProject() {
        gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: '#FF9900' });
        if (slideNum > 0) {
            projectLi[slideNum].classList.remove('selected');
            slideNum--;
            gsap.to(projectListWrapper, { left: "-" + 27 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == 0) {
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: inactiveColor });
        }
        showProjectView();
    }
    function goThisProject() {
        slideNum = getIndex(this);
        console.log('slideNum: ', slideNum);
        activateDot(slideNum);
        showProjectView();
    }
    function getIndex(thisMenu) {
        var selectedIndex = 0;
        while ((thisMenu = thisMenu.previousElementSibling) != null) {
            selectedIndex++;
        }
        return selectedIndex;
    }
    function activateDot(index) {
        for (var _i = 0, projectLi_2 = projectLi; _i < projectLi_2.length; _i++) {
            var item = projectLi_2[_i];
            item.classList.remove('selected');
        }
        selectedSlide = projectLi[index];
        selectedSlide.classList.add('selected');
        gsap.to(projectListWrapper, { left: "-" + 27 * slideNum + "rem" });
        if (slideNum == 0) {
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: activeColor });
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: inactiveColor });
        }
        else if (slideNum == projectLi.length - 1) {
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: activeColor });
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: inactiveColor });
        }
        else {
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: activeColor });
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { color: activeColor });
        }
    }
    function showProjectView() {
        for (var _i = 0, projectViewLi_1 = projectViewLi; _i < projectViewLi_1.length; _i++) {
            var item = projectViewLi_1[_i];
            item.classList.remove('selected');
        }
        projectViewLi[slideNum].classList.add('selected');
    }
});
