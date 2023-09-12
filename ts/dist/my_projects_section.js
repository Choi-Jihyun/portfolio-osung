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
        activateSlide(slideNum);
        showProjectView();
    }
    function getIndex(thisMenu) {
        var selectedIndex = 0;
        while ((thisMenu = thisMenu.previousElementSibling) != null) {
            selectedIndex++;
        }
        return selectedIndex;
    }
    function activateSlide(index) {
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
    var grayLayer = document.createElement('div');
    grayLayer.id = 'grayLayer';
    var overLayer = document.createElement('div');
    overLayer.id = 'overLayer';
    var projectMainImg = document.querySelectorAll('.project_main_pic > img');
    for (var _a = 0, projectMainImg_1 = projectMainImg; _a < projectMainImg_1.length; _a++) {
        var item = projectMainImg_1[_a];
        item.addEventListener('click', showImg);
    }
    grayLayer.addEventListener('click', hideImg);
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            hideImg();
        }
    });
    function showImg() {
        if (grayLayer && overLayer) {
            var body = document.querySelector('body');
            if (body) {
                body.style.overflowY = 'hidden';
                body.append(grayLayer);
                body.append(overLayer);
            }
        }
        gsap.set(grayLayer, { display: 'block' });
        gsap.to(grayLayer, { opacity: 0.9, duration: 0.3, ease: 'porwer1.out' });
        gsap.set(overLayer, { display: 'block' });
        var checkMenu = this; // 클릭한 이미지메뉴를 순번을 체크할 checkMenu에 대입 
        var selectedIndex = 0; // 클릭한 이미지 순번을 대입할 변수 
        while ((checkMenu = checkMenu.previousElementSibling) != null) { // 클릭한 이미지 메뉴의 순번구함 
            selectedIndex++;
        }
        overLayer.innerHTML = "";
        // 클릭한 이미지 메뉴 순번과 같은 이미지 번호의 큰이미지 생성하여 overLayer에 바로 넣어줌 
        // 중요) innerHTML 속성값으로 바로 넣어준다. (안에 있는 요소는 모두 지우고 새로운 요소를 넣어줌)
    }
    function hideImg() {
        gsap.set(overLayer, { display: 'none' });
        gsap.to(grayLayer, { opacity: 0, duration: .3, ease: 'power1.out', onComplete: function () {
                grayLayer.style.display = 'none';
                var body = document.querySelector('body');
                if (body) {
                    body.style.overflowY = 'auto'; // 세로 스크롤을 다시 활성화
                }
            } });
    }
});
