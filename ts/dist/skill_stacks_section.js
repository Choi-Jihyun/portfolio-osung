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
            if (scrollHeight > 1832) {
                svgElement.classList.add('animate');
            }
            else {
                svgElement.classList.remove('animate');
            }
        }
    });
    gsap.to('.ss_bg_text', {
        top: '0rem',
        scrollTrigger: {
            trigger: '#skill',
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 3
        }
    });
});
