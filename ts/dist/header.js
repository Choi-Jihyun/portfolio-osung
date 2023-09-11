document.addEventListener('DOMContentLoaded', function () {
    var osungLogo = document.querySelector("#logo");
    var menuLists = document.querySelectorAll(".menu_list > li");
    var headerSvg = document.querySelector(".menu > svg");
    var sections = document.querySelectorAll('section');
    osungLogo === null || osungLogo === void 0 ? void 0 : osungLogo.addEventListener('click', scrollToTop);
    menuLists.forEach(function (menuItem) {
        menuItem.addEventListener('click', scrollToSection);
    });
    window.addEventListener('scroll', highlightSection);
    function scrollToTop(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    function scrollToSection(event) {
        var targetId = event.target.getAttribute('data-target');
        if (targetId !== null) {
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                menuLists.forEach(function (menuItem) {
                    menuItem.classList.remove('selected');
                });
                event.target.classList.add('selected');
            }
        }
    }
    function highlightSection() {
        var scrollPosition = window.scrollY;
        sections.forEach(function (section) {
            var sectionTop = section.offsetTop;
            var sectionBottom = sectionTop + section.clientHeight + 30;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
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
