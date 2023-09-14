document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector('body');
    var grayLayer = document.querySelector("#gray_layer");
    var overLayer = document.querySelector("#over_layer");
    var projectView = document.querySelector('.project_view');
    var projectListWrapper = document.querySelector('.project_list');
    var projectLi = document.querySelectorAll('.project_list > li');
    var nextBtn = document.querySelector('.button-next');
    var prevBtn = document.querySelector('.button-prev');
    var olCloseBtn = document.querySelector("#ol_close_btn");
    var swiperInner = document.querySelector(".axios_swiper_wrapper");
    var slideNum = 0;
    var previousSlideNum = null;
    var selectedSlide = projectLi[0];
    var isHoverOnView = false;
    init();
    initEvent();
    function init() {
        showProjectView();
        gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'none', opacity: '0' });
    }
    function initEvent() {
        projectView === null || projectView === void 0 ? void 0 : projectView.addEventListener('mouseenter', hoverDetail);
        projectView === null || projectView === void 0 ? void 0 : projectView.addEventListener('mouseleave', leaveHoverDetail);
        nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', slideNextProject);
        prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', slidePrevProject);
        for (var _i = 0, projectLi_1 = projectLi; _i < projectLi_1.length; _i++) {
            var item = projectLi_1[_i];
            item.addEventListener('click', goThisProject);
        }
        grayLayer === null || grayLayer === void 0 ? void 0 : grayLayer.addEventListener('click', hideDetails);
        olCloseBtn === null || olCloseBtn === void 0 ? void 0 : olCloseBtn.addEventListener('click', hideDetails);
        document.addEventListener('keydown', function (event) { if (event.key === "Escape") {
            hideDetails();
        } });
    }
    function slideNextProject() {
        gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'block' });
        gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { opacity: '1' });
        if (slideNum < projectLi.length - 1) {
            projectLi[slideNum].classList.remove('selected');
            slideNum++;
            gsap.to(projectListWrapper, { left: "-" + 27 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == projectLi.length - 1) {
            gsap.to(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { opacity: '0', duration: 0.2 });
        }
        showProjectView();
    }
    function slidePrevProject() {
        gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: '#FF9900' });
        gsap.to(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { opacity: '1' });
        if (slideNum > 0) {
            projectLi[slideNum].classList.remove('selected');
            slideNum--;
            gsap.to(projectListWrapper, { left: "-" + 27 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == 0) {
            gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { opacity: '0', duration: 0.2, onComplete: function () {
                    gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'none' });
                } });
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
            gsap.to(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { opacity: '1', duration: 0.2 });
            gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { opacity: '0', duration: 0.2 });
        }
        else if (slideNum == projectLi.length - 1) {
            gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { opacity: '1', duration: 0.2 });
            gsap.to(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { opacity: '0', duration: 0.2 });
        }
        else {
            gsap.to(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { opacity: '1', duration: 0.2 });
            gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'block' });
            gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { opacity: '1', duration: 0.2 });
        }
    }
    function showProjectView() {
        if (previousSlideNum === slideNum) {
            return;
        }
        if (projectView) {
            projectView.innerHTML = '';
            axios.get("./project_content/project_overview0" + (slideNum + 1) + ".html").then(function (response) {
                projectView.innerHTML = response.data;
                previousSlideNum = slideNum;
            })["catch"](function (error) {
                console.error("error:", error);
            });
        }
    }
    function showDetails() {
        console.log('showDetails');
        showProjectDetail();
        if (body) {
            body.style.overflowY = 'hidden';
        }
        gsap.set(grayLayer, { display: 'block' });
        gsap.to(grayLayer, { opacity: 0.9, duration: 0.5, ease: 'porwer1.out' });
        gsap.set(overLayer, { display: 'block' });
        console.log('slideNum: ', slideNum);
    }
    function hideDetails() {
        gsap.set(overLayer, { display: 'none' });
        gsap.to(grayLayer, { opacity: 0, duration: .1, ease: 'power1.out', onComplete: function () {
                if (grayLayer instanceof HTMLElement) {
                    grayLayer.style.display = 'none';
                }
                if (body) {
                    body.style.overflowY = 'auto';
                }
            } });
        // if (swiperInner) {
        //   swiperInner.innerHTML = '';
        // }
    }
    function hoverDetail() {
        var mouseoverDiv = document.querySelector('.mouseover');
        if (mouseoverDiv) {
            mouseoverDiv.addEventListener('click', showDetails);
            isHoverOnView = true;
            mouseoverDiv.innerHTML = "<img src='/images/more_detail.png' alt='자세히 보기'>";
            gsap.set(mouseoverDiv, { opacity: 0, display: 'block', onComplete: function () {
                    gsap.to(mouseoverDiv, { opacity: 1, duration: 0.3, onComplete: function () {
                            isHoverOnView = true;
                        } });
                } });
        }
    }
    function leaveHoverDetail() {
        var mouseoverDiv = document.querySelector('.mouseover');
        if (mouseoverDiv) {
            gsap.to(mouseoverDiv, { opacity: 0, duration: 0.1, onComplete: function () {
                    gsap.set(mouseoverDiv, { display: 'none', opacity: 0 });
                    mouseoverDiv.innerHTML = "";
                    isHoverOnView = false;
                } });
        }
    }
    function showProjectDetail() {
        if (body) {
            body.style.overflowY = 'hidden';
        }
        if (swiperInner) {
            swiperInner.innerHTML = '';
            axios.get("./project_content/project_details/project_detail0" + (slideNum + 1) + ".html").then(function (response) {
                swiperInner.innerHTML = response.data;
                previousSlideNum = slideNum;
                var swiper = new Swiper('.detail-slider > div', {
                    spaceBetween: 30,
                    effect: 'fade',
                    loop: true,
                    mousewheel: {
                        invert: false
                    },
                    autoHeight: true,
                    pagination: {
                        el: '.detail-slider__pagination',
                        clickable: true
                    }
                });
            })["catch"](function (error) {
                console.error("error:", error);
            });
        }
    }
    function hideProjectDetail() {
    }
});
