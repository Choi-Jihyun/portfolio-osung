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
    var ssSvgObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.target instanceof Element) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.right = '0';
                }
                else {
                    entry.target.style.opacity = '0';
                    entry.target.style.right = '-300px';
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
    if (ssSvg) {
        ssSvgObserver.observe(ssSvg);
    }
    gsap.to('.ss_bg_text', {
        top: '6rem',
        scrollTrigger: {
            trigger: '#skill',
            start: 'top 55%',
            end: 'bottom 0%',
            scrub: 3
        }
    });
});
