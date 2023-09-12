document.addEventListener('DOMContentLoaded', function () {
    var frontSkillLi = document.querySelectorAll(".front_end_skill_list > li");
    var etcSkillLi = document.querySelectorAll(".etc_skill_list > li");
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
});
