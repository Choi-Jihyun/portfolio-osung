document.addEventListener('DOMContentLoaded', function () {
    var osungLogo = document.querySelector("#logo");
    var menuLists = document.querySelectorAll(".menu_list > li");
    var headerSvg = document.querySelector(".menu > svg");
    var headerSvgColors = document.querySelectorAll(".menu > svg > path");
    var sections = document.querySelectorAll('section');
    osungLogo === null || osungLogo === void 0 ? void 0 : osungLogo.addEventListener('click', scrollToTop);
    menuLists.forEach(function (menuItem) {
        menuItem.addEventListener('click', scrollToSection);
    });
    window.addEventListener('scroll', highlightSection);
    // window.addEventListener('scroll', runningOsung);
    function scrollToTop(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    function scrollToSection(event) {
        var targetId = event.target.getAttribute('data-target');
        if (targetId !== null) {
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
    function highlightSection() {
        var scrollPosition = window.scrollY;
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.clientHeight;
            if (scrollPosition >= sectionTop - 10 && scrollPosition < sectionBottom) {
                var targetId_1 = section.id;
                menuLists.forEach(function (menuItem) {
                    if (menuItem.getAttribute('data-target') === targetId_1) {
                        menuItem.classList.add('selected');
                    }
                    else {
                        menuItem.classList.remove('selected');
                    }
                });
            }
        });
    }
});
