document.addEventListener('DOMContentLoaded', function () {
    var awardsList = document.querySelectorAll('#awards_list > li');
    var certificates = document.querySelector("#certificates");
    var amSvgLine = document.querySelector(".am_bg_line > svg");
    window.addEventListener('scroll', animateAmSvgLine);
    gsap.to(awardsList[0], {
        left: 0,
        opacity: 1,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: awardsList[0],
            start: 'top 70%',
            end: 'bottom 70%',
            scrub: 2
        },
        onComplete: function () {
            gsap.to(certificates, { opacity: 1, duration: 0.3, ease: "power1.out" });
        }
    });
    gsap.to(awardsList[1], {
        left: 0,
        opacity: 1,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: awardsList[1],
            start: 'top 65%',
            end: 'bottom 65%',
            scrub: 2
        }
    });
    gsap.to(awardsList[2], {
        left: 0,
        opacity: 1,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: awardsList[2],
            start: 'top 60%',
            end: 'bottom 60%',
            scrub: 2
        }
    });
    gsap.to(awardsList[3], {
        left: 0,
        opacity: 1,
        ease: 'power1.out',
        scrollTrigger: {
            trigger: awardsList[3],
            start: 'top 55%',
            end: 'bottom 55%',
            scrub: 2
        }
    });
    function animateAmSvgLine() {
        var scrollPosition = window.scrollY;
        var footer = document.querySelector("footer");
        if (footer) {
            var footerTop = footer.offsetTop;
            var footerBottom = footerTop + footer.clientHeight;
            if (amSvgLine) {
                if (scrollPosition >= footerTop - 600) {
                    amSvgLine.classList.add('selected');
                }
                else if (scrollPosition <= footerTop - 1600) {
                    amSvgLine.classList.remove('selected');
                }
            }
        }
    }
});
