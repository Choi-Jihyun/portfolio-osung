document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector('body');
    var grayLayer = document.querySelector("#gray_layer");
    var overLayer = document.querySelector("#over_layer");
    var projectListWrapper = document.querySelector('.project_list');
    var projectViewWrapper = document.querySelector('.project_info_list');
    var projectLi = document.querySelectorAll('.project_list > li');
    var projectMainImg = document.querySelectorAll('.project_main_pic > img');
    var nextBtn = document.querySelector('.button-next');
    var prevBtn = document.querySelector('.button-prev');
    var inactiveColor = '#cccccc';
    var activeColor = '#FF9900';
    var slideNum = 0;
    var previousSlideNum = null;
    var selectedSlide = projectLi[0];
    init();
    function init() {
        showProjectView();
    }
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
        if (previousSlideNum === slideNum) {
            return;
        }
        if (projectViewWrapper) {
            projectViewWrapper.innerHTML = '';
            axios.get("./project_content/project_overview0" + (slideNum + 1) + ".html").then(function (response) {
                projectViewWrapper.innerHTML = response.data;
                previousSlideNum = slideNum;
            })["catch"](function (error) {
                console.error("error:", error);
            });
        }
    }
    for (var _a = 0, projectMainImg_1 = projectMainImg; _a < projectMainImg_1.length; _a++) {
        var item = projectMainImg_1[_a];
        item.addEventListener('click', showImg);
    }
    if (grayLayer) {
        grayLayer.addEventListener('click', hideImg);
    }
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape") {
            hideImg();
        }
    });
    function showImg() {
        if (body) {
            body.style.overflowY = 'hidden';
        }
        gsap.set(grayLayer, { display: 'block' });
        gsap.to(grayLayer, { opacity: 0.9, duration: 0.3, ease: 'porwer1.out' });
        gsap.set(overLayer, { display: 'block' });
        var checkMenu = this; // 클릭한 이미지메뉴를 순번을 체크할 checkMenu에 대입 
        var selectedIndex = 0; // 클릭한 이미지 순번을 대입할 변수 
        while ((checkMenu = checkMenu.previousElementSibling) != null) { // 클릭한 이미지 메뉴의 순번구함 
            selectedIndex++;
        }
        if (overLayer) {
            overLayer.innerHTML = "";
        }
    }
    function hideImg() {
        gsap.set(overLayer, { display: 'none' });
        gsap.to(grayLayer, { opacity: 0, duration: .3, ease: 'power1.out', onComplete: function () {
                if (grayLayer instanceof HTMLElement) {
                    grayLayer.style.display = 'none';
                }
                if (body) {
                    body.style.overflowY = 'auto';
                }
            } });
    }
});
