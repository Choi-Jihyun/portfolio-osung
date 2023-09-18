document.addEventListener('DOMContentLoaded', function () {
    var frontSkillLi = document.querySelectorAll(".front_end_skill_list > li");
    var etcSkillLi = document.querySelectorAll(".etc_skill_list > li");
    var ssSvg = document.querySelector(".ss_title_svg");
    var frontSkillLiObserver = new IntersectionObserver(function (e) {
        e.forEach(function (item) {
            if (item.target instanceof HTMLElement) {
                if (item.isIntersecting) {
                    item.target.style.opacity = '1';
                }
                else {
                    item.target.style.opacity = '0';
                }
            }
        });
    });
    var etcSkillLiObserver = new IntersectionObserver(function (e) {
        e.forEach(function (item) {
            if (item.target instanceof HTMLElement) {
                if (item.isIntersecting) {
                    item.target.style.opacity = '1';
                }
                else {
                    item.target.style.opacity = '0';
                }
            }
        });
    });
    for (var _i = 0, frontSkillLi_1 = frontSkillLi; _i < frontSkillLi_1.length; _i++) {
        var item = frontSkillLi_1[_i];
        frontSkillLiObserver.observe(item);
    }
    for (var _a = 0, etcSkillLi_1 = etcSkillLi; _a < etcSkillLi_1.length; _a++) {
        var item = etcSkillLi_1[_a];
        etcSkillLiObserver.observe(item);
    }
    window.addEventListener('scroll', function () {
        var svgElement = document.querySelector('.ss_title_svg');
        var scrollHeight = window.scrollY;
        var windowHeight = window.innerHeight;
        if (svgElement instanceof HTMLElement) {
            console.log(scrollHeight);
            if (scrollHeight > 1832) { // 화면의 높이의 45%가 넘었을 때
                svgElement.classList.add('animate'); // animate 클래스 추가
            }
            else {
                svgElement.classList.remove('animate'); // 그 외 경우 animate 클래스 제거
            }
        }
    });
});
