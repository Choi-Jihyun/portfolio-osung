document.addEventListener('DOMContentLoaded', function () {
    var blueCircle = document.querySelector(".mt_bg_circle_left");
    var orangeCircle = document.querySelector(".mt_bg_circle_right");
    var mottoText = document.querySelector(".motto_text");
    var mtBgMovingText = document.querySelector(".mt_bg_text");
    var blueCircleObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.target instanceof HTMLElement) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0.2';
                    entry.target.style.bottom = '-10rem';
                }
                else {
                    entry.target.style.opacity = '0';
                    entry.target.style.bottom = '-20rem';
                }
            }
        });
    });
    var orangeCircleObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.target instanceof HTMLElement) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0.5';
                    entry.target.style.bottom = '7rem';
                }
                else {
                    entry.target.style.opacity = '0';
                    entry.target.style.bottom = '-10rem';
                }
            }
        });
    });
    var mottoTextObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.target instanceof HTMLElement) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
                else {
                    entry.target.style.opacity = '0';
                }
            }
        });
    });
    var mtBgMovingTextObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.target instanceof HTMLElement) {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
                else {
                    entry.target.style.opacity = '0';
                }
            }
        });
    });
    blueCircleObserver.observe(blueCircle);
    orangeCircleObserver.observe(orangeCircle);
    mottoTextObserver.observe(mottoText);
    mtBgMovingTextObserver.observe(mtBgMovingText);
});
