document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector('body');
    var grayLayer = document.querySelector("#gray_layer");
    var overLayer = document.querySelector("#over_layer");
    var projectListWrapper = document.querySelector('.project_list');
    var projectViewWrapper = document.querySelector('.project_info_list');
    // const projectMain = document.querySelector('.project_main_pic'); 
    // const projectMainImg = document.querySelector('.project_main_pic > img'); 
    // const moreDetail = document.querySelector('.mouseover > img'); 
    var projectLi = document.querySelectorAll('.project_list > li');
    var nextBtn = document.querySelector('.button-next');
    var prevBtn = document.querySelector('.button-prev');
    var inactiveColor = '#cccccc';
    var activeColor = '#FF9900';
    var slideNum = 0;
    var previousSlideNum = null;
    var selectedSlide = projectLi[0];
    var currentHoverHandler = null;
    init();
    initEvent();
    function init() {
        showProjectView();
        gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'none' });
    }
    function initEvent() {
        nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener('click', slideNextProject);
        prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.addEventListener('click', slidePrevProject);
        for (var _i = 0, projectLi_1 = projectLi; _i < projectLi_1.length; _i++) {
            var item = projectLi_1[_i];
            item.addEventListener('click', goThisProject);
        }
        projectViewWrapper === null || projectViewWrapper === void 0 ? void 0 : projectViewWrapper.addEventListener('mouseenter', hoverDetail);
        // projectMain?.addEventListener('click', showImg);
        // moreDetail?.addEventListener('click', showImg);
        if (grayLayer) {
            grayLayer.addEventListener('click', hideImg);
        }
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                hideImg();
            }
        });
    }
    function slideNextProject() {
        // gsap.set(prevBtn?.children, {color: '#FF9900'})
        gsap.to(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'block' });
        if (slideNum < projectLi.length - 1) {
            projectLi[slideNum].classList.remove('selected');
            slideNum++;
            gsap.to(projectListWrapper, { left: "-" + 27 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == projectLi.length - 1) {
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: inactiveColor });
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { display: "none" });
        }
        showProjectView();
    }
    function slidePrevProject() {
        gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { color: '#FF9900' });
        gsap.to(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { display: 'block' });
        if (slideNum > 0) {
            projectLi[slideNum].classList.remove('selected');
            slideNum--;
            gsap.to(projectListWrapper, { left: "-" + 27 * slideNum + "rem" });
            projectLi[slideNum].classList.add('selected');
        }
        if (slideNum == 0) {
            // gsap.set(prevBtn?.children, {color: inactiveColor})
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: "none" });
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
            // gsap.set(nextBtn?.children, {color: activeColor})
            // gsap.set(prevBtn?.children, {color: inactiveColor})
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { display: 'block' });
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'none' });
        }
        else if (slideNum == projectLi.length - 1) {
            // gsap.set(prevBtn?.children, {color: activeColor})
            // gsap.set(nextBtn?.children, {color: inactiveColor})
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'block' });
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { display: 'none' });
        }
        else {
            // gsap.set(nextBtn?.children, {color: activeColor})
            // gsap.set(prevBtn?.children, {color: activeColor})
            gsap.set(nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.children, { display: 'block' });
            gsap.set(prevBtn === null || prevBtn === void 0 ? void 0 : prevBtn.children, { display: 'block' });
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
                var parser = new DOMParser();
                var htmlDocument = parser.parseFromString(response.data, 'text/html');
                var projectMain = htmlDocument.querySelector('.project_main_pic');
                projectMain.addEventListener('mouseenter', hoverDetail);
            })["catch"](function (error) {
                console.error("error:", error);
            });
        }
    }
    // async function showProjectView(): Promise<void> {
    //   if (previousSlideNum === slideNum) {
    //     return;
    //   }
    //   if (projectViewWrapper) {
    //     projectViewWrapper.innerHTML = '';
    //     try {
    //       const response = await axios.get(`./project_content/project_overview0${slideNum + 1}.html`);
    //       // DOM Parser를 이용하여 HTML 문자열을 DOM 객체로 변환합니다.
    //       const parser = new DOMParser();
    //       const htmlDocument = parser.parseFromString(response.data, 'text/html');
    //       // 변환된 DOM 객체에서 원하는 요소들을 선택합니다.
    //       const projectMain = htmlDocument.querySelector('.project_main_pic') as HTMLElement;
    //       const projectMainImg = htmlDocument.querySelector('.project_main_pic > img');
    //       // 이후 로직...
    //       const hoverHandler = () => {
    //         hoverDetail(projectMain);
    //         // Remove the event listener after the first execution
    //         projectMain?.removeEventListener('mouseenter', hoverHandler);
    //       };
    //       projectMain.addEventListener('mouseenter', hoverHandler);
    //       // projectMain.addEventListener('mouseleave', hoverHandler);
    //       // 최종적으로 변환된 HTML 내용을 실제 페이지에 추가합니다.
    //       projectViewWrapper.innerHTML = response.data;
    //     } catch (error: any) {
    //         console.error(`error:`, error);
    //     }
    //     previousSlideNum = slideNum;
    //   }
    // }
    function showImg() {
        console.log('showimg');
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
    function hoverDetail() {
        console.log('hoverDetail');
        var mouseoverDiv = document.querySelector('.mouseover');
        if (mouseoverDiv) {
            mouseoverDiv.innerHTML = "<img src='/images/more_detail.png' alt='자세히 보기'>";
            gsap.to(mouseoverDiv, { opacity: 1, duration: 2 });
        }
    }
    function leaveHoverDetail(element) {
        if (element) {
            var mouseoverDiv = document.querySelector('.mouseover');
            if (mouseoverDiv) {
                gsap.to(mouseoverDiv, { opacity: 0, duration: 2 });
            }
        }
    }
});
